import { Controller, Post, Body, Patch, UseGuards, ParseUUIDPipe, Param, Request, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Login do usuário' })
  @ApiBody({ type: LoginUserDto })
  @ApiResponse({
    status: 201,
    description: 'Usuário logado com sucesso',
    type: User,
  })
  @Post('login')
  async login(@Body() body: LoginUserDto) {
    return await this.authService.loginUser(body.account, body.password);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('update/id=:id')
  async update
  (
    @Param('id', ParseUUIDPipe)id: string,
    @Body() dto: UpdateUserDto,@Request() req, 
  ){
    return await this.authService.updateUser(id, dto, req.user.userId)
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete/id=:id')
  async delete
  (
    @Param('id', ParseUUIDPipe)id: string,
    @Request() req, 
  ){
    return await this.authService.deleteUser(id, req.user.userId)
  }
}