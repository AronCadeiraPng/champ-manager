import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from '../auth/dto/login-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { compare } from 'bcrypt';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt'
import { NotFoundException } from 'src/common/exceptions';
import { Roles } from 'src/decorators/roles.decorator';
import { UserRoles } from 'src/common/enums/user-roles.enum';
import { BadRequestException } from 'src/common/exceptions/bad-request.exception';

const INVALID_CREDENTIALS = 'Credenciais inválidas';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>,) { }


  ///=========================REGISTRO DO USUÁRIO=========================///
  async registerUser(registerUserDto: RegisterUserDto): Promise<User> {
    const emailExists = await this.findUserByEmail(registerUserDto.email);
    const CpfExists = await this.findUserByCpf(registerUserDto.cpf);

    if (emailExists) throw new BadRequestException('Usuário com este email já existe!', 400);
    if (CpfExists) throw new BadRequestException('Usuário com este cpf já cadastrado!', 400);

    /* gerar hash da senha */
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(registerUserDto.password, salt);

    /* registra o usuário com sucesso */
    const user = this.usersRepository.create({
      ...registerUserDto,
      password: hashedPassword,
    })

    return this.usersRepository.save(user);
  }


  ///=========================LOGIN=========================///

  async loginIn(loginUser: LoginUserDto) {
    const user = await this.usersRepository.findOne({
      where: [
        { email: loginUser.account },
        { cpf: loginUser.account },
      ],
    });


    if (!user) { throw new NotFoundException(INVALID_CREDENTIALS) }

    const isPasswordValid = await compare(loginUser.password, user.password);

    if (!isPasswordValid) { throw new BadRequestException(INVALID_CREDENTIALS, 400) }

    return user;
  }

  ///=========================MÉTODOS GET & FIND=========================///
  @Roles(UserRoles.ADMIN, UserRoles.MANAGER)
  async findAllUsers(): Promise<User[]> {
    return await this.usersRepository.find({
      select: ['id', 'gender', 'name', 'email', 'createdAt', 'role']
    })
  }

  async findUserById(id: string) {
    const user = await this.usersRepository.findOne({
      where: { id: id },
      select: ['id', 'gender', 'name', 'email', 'createdAt', 'role']
    });
    if (!user) { throw new NotFoundException(`Usuário: ${id}`) };
    return user;
  }

  async findUserByEmail(email: string) {
    return await this.usersRepository.findOne({
      where: { email: email },
      select: ['id','password', 'gender', 'name', 'email', 'createdAt', 'role']
    });
  }

  async findUserByCpf(cpf: string) {
    return await this.usersRepository.findOne({
      where: { cpf: cpf },
      select: ['id', 'gender', 'name', 'email', 'createdAt', 'role']
    })
  }
}
