import { BadRequestException, Injectable } from "@nestjs/common"
import * as bcrypt from 'bcrypt'
import { RegisterUserDto } from '../../models/dtos/register-user.dto';
import { User } from '../../models/entity/user.entity';
import { FindUserByEmailService } from "../find-by-email/find-by-email.service";
import { FindUserByCpfService } from "../find-by-cpf/find-by-cpf.service";
import { UserRepository } from "../../repository/user.repository";

@Injectable()
export class UserRegisterService {
      constructor(
        private readonly repository: UserRepository,
        private readonly findUserByEmail: FindUserByEmailService,
        private readonly findUserByCpf: FindUserByCpfService
      ) { }

      async registerUser(registerUserDto: RegisterUserDto): Promise<User> {
        const emailExists = await this.findUserByEmail.execute(registerUserDto.email);
        const CpfExists = await this.findUserByCpf.execute(registerUserDto.cpf);
    
        if (emailExists) throw new BadRequestException('Email inválido ou já cadastrado!');
        if (CpfExists) throw new BadRequestException('CPF inváido ou já cadastrado!');
    
        /* gerar hash da senha */
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(registerUserDto.password, salt);
    
        /* registra o usuário com sucesso */
        const user = await this.repository.createAndSave({
          ...registerUserDto,
          password: hashedPassword,
        })

        return user;
      }
}