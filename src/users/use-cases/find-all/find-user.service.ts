import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../models/entity/user.entity';

export class UserFindService {
  constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) { }
  
  async findUserById(id: string) {
    const user = await this.usersRepository.findOne({
      where: { id: id },
      select: ['id', 'gender', 'name', 'email', 'createdAt', 'role']
    });
    if (!user) {
      throw new NotFoundException(`Usuário com id: ${id}`)
    };
    return user;
  }

  async findUserByEmail(email: string) {
    return await this.usersRepository.findOne({
      where: { email: email },
      select: ['id', 'password', 'gender', 'name', 'email', 'createdAt', 'role']
    });
  }

  async findUserByCpf(cpf: string) {
    return await this.usersRepository.findOne({
      where: { cpf: cpf },
      select: ['id', 'gender', 'name', 'email', 'createdAt', 'role']
    })
  }
}