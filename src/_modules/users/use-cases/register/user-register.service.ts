import { BadRequestException, Injectable } from "@nestjs/common"
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'
import { RegisterUserDto } from '../../models/dtos/register-user.dto';
import { User } from '../../models/entity/user.entity';
import { FindUserByIdService } from "../find-by-id/find-by-id.service";

@Injectable()
export class UserRegisterService {
      constructor(
        @InjectRepository(User) private readonly usersRepository: Repository<User>,
        private readonly findUserById: FindUserByIdService
      ) { }

      async registerUser(registerUserDto: RegisterUserDto): Promise<User> {
        const emailExists = await this.findUserById.execute(registerUserDto.email);
        const CpfExists = await this.findUserById.execute(registerUserDto.cpf);
    
        if (emailExists) throw new BadRequestException('Email inválido ou já cadastrado!');
        if (CpfExists) throw new BadRequestException('CPF inváido ou já cadastrado!');
    
        /* gerar hash da senha */
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(registerUserDto.password, salt);
    
        /* registra o usuário com sucesso */
        const user = this.usersRepository.save  ({
          ...registerUserDto,
          password: hashedPassword,
        })

        return user;
      }
}