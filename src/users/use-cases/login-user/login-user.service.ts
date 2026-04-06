import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { compare } from 'bcrypt';
import { NotFoundException } from 'src/common/exceptions';
import { BadRequestException } from 'src/common/exceptions/bad-request.exception';
import { User } from 'src/users/models/entity/user.entity';
import { LoginUserDto } from 'src/auth/dto/login-user.dto';

const INVALID_CREDENTIALS = 'Credenciais inválidas';

@Injectable()
export class UserLoginService {

  constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>,) { }

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
}
