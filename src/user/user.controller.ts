import { Controller, Get, Post, Body, Param, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { ParseUUIDPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Registra um novo usuário' })
  @ApiBody({ type: RegisterUserDto })
  @ApiResponse({
    status: 201,
    description: 'Usuário criado com sucesso',
    type: User,
  })
  @Post('register')
  async create(@Body() registerUserDto: RegisterUserDto) {
    return await this.userService.registerUser(registerUserDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('id=:id')
  async findUserById(@Param('id', ParseUUIDPipe) id: string) {
    return await this.userService.findUserById(id);
  }

  @ApiOperation({ summary: 'Retorna todos os usuários' })
  @ApiResponse({
    status: 201,
    type: User,
  })
  @Get('all')
  async findAllUsers() {
    return await this.userService.findAllUsers()
  }
}
