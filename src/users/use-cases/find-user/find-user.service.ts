import { Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRoles } from "src/common/enums/user-roles.enum";
import { NotFoundException } from "src/common/exceptions";
import { Roles } from "src/decorators/roles.decorator";
import { User } from "src/users/models/entity/user.entity";
import { Repository } from "typeorm";

export class UserFindService {
  constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) { }

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