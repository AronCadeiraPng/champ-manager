import { BadRequestException, Injectable } from "@nestjs/common"
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'
import { UserFindService } from '../find-user/find-user.service';
import { RegisterUserDto } from '../../models/dtos/register-user.dto';
import { User } from '../../models/entity/user.entity';

@Injectable()
export class UserRegisterService {
      constructor(
        @InjectRepository(User) private readonly usersRepository: Repository<User>,
        private readonly findUser: UserFindService
      ) { }

      async registerUser(registerUserDto: RegisterUserDto): Promise<void> {
        const emailExists = await this.findUser.findUserByEmail(registerUserDto.email);
        const CpfExists = await this.findUser.findUserByCpf(registerUserDto.cpf);
    
        if (emailExists) throw new BadRequestException('Usuário com este email já existe!');
        if (CpfExists) throw new BadRequestException('Usuário com este cpf já cadastrado!');
    
        /* gerar hash da senha */
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(registerUserDto.password, salt);
    
        /* registra o usuário com sucesso */
        const user = this.usersRepository.create({
          ...registerUserDto,
          password: hashedPassword,
        })
      }
}