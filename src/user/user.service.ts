  import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
  import { RegisterUserDto } from './dto/register-user.dto';
  import { LoginUserDto } from './dto/login-user.dto';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository } from 'typeorm';
  import { User } from './entities/user.entity';


  @Injectable()
  export class UserService {
    
    constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>,) {}

    async registerUser(registerUserDto: RegisterUserDto) {
      const userExists = await this.findUserByEmail(registerUserDto.email)
      
      if (userExists) throw new BadRequestException('Usuário com este email já existe!')
      return this.usersRepository.create(registerUserDto)
    }

    async LoginIn(loginUser: LoginUserDto) {
      const user = this.findUserByEmail(loginUser.account) 
      if(!user) throw new NotFoundException(`Usuário não encontrado...`)
        return user
    }

    async findUserById(id: string) {
      return await this.usersRepository.findOneBy({id})
    }

    async findUserByEmail(email: string) {
      return await this.usersRepository.findOneBy({email})
      // if(!user) throw new NotFoundException(`Usuário de id ${email} não encontrado...`)
    }

    remove(id: number) {
      return `This action removes a #${id} user`;
    }
  }
