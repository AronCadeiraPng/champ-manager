  import { BadRequestException, Injectable } from '@nestjs/common';
  import { RegisterUserDto } from './dto/register-user.dto';
  import { LoginUserDto } from '../auth/dto/login-user.dto';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository } from 'typeorm';
  import { hash, compare } from 'bcrypt';
  import { User } from './entities/user.entity';
  import * as bcrypt from 'bcrypt'
  import { NotFoundException } from 'src/common/exceptions';
  import { ParseUUIDPipe } from '@nestjs/common';

  @Injectable()
  export class UserService {
    
    constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>,) {}


    ///REGISTRO
    async registerUser(registerUserDto: RegisterUserDto): Promise<User> {
      const emailExists = await this.findUserByEmail(registerUserDto.email);
      const CpfExists = await this.findUserByCpf(registerUserDto.cpf);
      
      if (emailExists) throw new BadRequestException('Usuário com este email já existe!');
      if (CpfExists) throw new BadRequestException('Usuário com este cpf já cadastrado!');

      ///GERAR HASH DA SENHA
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(registerUserDto.password, salt);

      const user = this.usersRepository.create({
        ...registerUserDto,
        password: hashedPassword,
      })

      return this.usersRepository.save(user);
    }


    ///LOGIN
    async loginIn(loginUser: LoginUserDto) {
      const user = await this.usersRepository.findOne({
        where: [
          { email: loginUser.account },
          { cpf: loginUser.account },
        ],
      });
      

      if (!user) {
        throw new NotFoundException('Usuário não encontrado');
      }
    
      const isPasswordValid = await compare(loginUser.password, user.password);
    
      if (!isPasswordValid) {
        throw new BadRequestException('Credenciais incorretas');
      }
    
      return user;
    }


    ///MÉTODOS FIND BY / GET
    async findAllUsers(): Promise<User[]> {
      return await this.usersRepository.find()
    }

    async findUserByName(name: string) {
      return await this.usersRepository.findOneBy({name});
    }
    
    async findUserById(id: string) {
      const user = await this.usersRepository.findOneBy({id});
      if (!user) { throw new NotFoundException('Usuário', id) };
      return user;
    }

    async findUserByEmail(email: string) {
      return await this.usersRepository.findOneBy({email});
    }

    async findUserByCpf(cpf: string) {
      return await this.usersRepository.findOneBy({cpf});
    }
  }
