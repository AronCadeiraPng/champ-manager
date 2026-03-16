import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() registerUserDto: RegisterUserDto) {
    return this.userService.registerUser(registerUserDto);
  }

  @Get(':email')
  async findAll(@Body() userLoginData: LoginUserDto) {
    const user = await this.userService.LoginIn(userLoginData);
    return user
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
