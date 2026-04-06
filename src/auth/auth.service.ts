import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { NotFoundException, ConflictException } from 'src/common/exceptions';
import { UpdateUserDto } from 'src/users/models/dtos/update-user.dto';
import { User } from 'src/users/models/entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserFindService } from 'src/users/use-cases/find-user/find-user.service';

@Injectable()
export class AuthService {
  constructor(
    private userFindService: UserFindService,
    private jwtService: JwtService,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}


  async loginUser(email: string, password: string) {
    const user = await this.userFindService.findUserByEmail(email);
    if (!user) { throw new NotFoundException('Usuário', email, 'email') }

    const isMatch = await compare(password, user.password);
    if (!isMatch) { throw new ConflictException('Credenciais incorretas') }

    const payload = {
      sub: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    };

    return { access_token: this.jwtService.sign(payload) };
  }


  async updateUser(id: string, updateUserDto: UpdateUserDto, requesterId: string) {
    const user = await this.userFindService.findUserById(id);

    if (user.id !== requesterId) throw new ConflictException('Usuário não corresponde');
    Object.assign(user, updateUserDto);
    
    return this.usersRepository.save(user)
  }


  async deleteUser(id: string) {
    const user = await this.userFindService.findUserById(id);

    if (!user) throw new ConflictException('Erro ao deletar usuário');
    return this.usersRepository.remove(user)
  }
}