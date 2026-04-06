import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm";
import { BadRequestException } from "src/common/exceptions/bad-request.exception";
import { RegisterUserDto } from "src/users/models/dtos/register-user.dto";
import { User } from "src/users/models/entity/user.entity";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt'
import { UserFindService } from "../find-user/find-user.service";

@Injectable()
export class UserRegisterService {
      constructor(
        @InjectRepository(User) private readonly usersRepository: Repository<User>,
        private readonly findUser: UserFindService
      ) { }

      async registerUser(registerUserDto: RegisterUserDto): Promise<User> {
        const emailExists = await this.findUser.findUserByEmail(registerUserDto.email);
        const CpfExists = await this.findUser.findUserByCpf(registerUserDto.cpf);
    
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
}