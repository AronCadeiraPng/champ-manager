import { Injectable, BadRequestException, UnauthorizedException, ConflictException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { compare } from "bcrypt";
import { UpdateUserDto } from "../_modules/users/models/dtos/update-user.dto";
import { UserRepository } from "../_modules/users/repository/user.repository";
import { FindUserByEmailService } from "../_modules/users/use-cases/find-by-email/find-by-email.service";
import { FindUserByIdService } from "../_modules/users/use-cases/find-by-id/find-by-id.service";


@Injectable()
export class AuthService {
  constructor(
    private findUserById: FindUserByIdService,
    private findUserByEmail: FindUserByEmailService,
    private jwtService: JwtService,
    private readonly userRepository: UserRepository
  ) { }

  async loginUser(email: string, password: string) {
    const user = await this.findUserByEmail.execute(email);

    if (!user) {
      throw new BadRequestException('Credenciais inválidas!');
    }

    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Credenciais inválidas!');
    }

    const payload = {
      sub: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    const accessToken: string = this.jwtService.sign(payload);

    return accessToken;
  }

  async updateUser(
    id: string,
    updateUserDto: UpdateUserDto
  ) {
    const user = await this.findUserById.execute(id);

    Object.assign(user, updateUserDto);

    return this.userRepository.save(user);
  }

  async deleteUser(id: string) {
    const user = await this.findUserById.execute(id);

    if (!user) throw new ConflictException('Erro ao deletar usuário');

    return this.userRepository.remove(user);
  }
}
