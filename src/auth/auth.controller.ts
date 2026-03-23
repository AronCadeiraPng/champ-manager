import { Controller, Post, Body, Patch, UseGuards, ParseUUIDPipe, Param, Request, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { UserRoles } from 'src/common/enums/user-roles.enum';
import { RegisterUserDto } from 'src/users/dto/register-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  /// LOGA O USUÁRIO E RETORNA O TOKEN
  @Post('login')
  @ApiOperation({ summary: 'Login do usuário' })
  @ApiBody({ type: LoginUserDto })
  @ApiResponse({
    status: 201,
    description: 'Usuário logado com sucesso',
    type: User,
  })
  async login(@Body() body: LoginUserDto) {
    return await this.authService.loginUser(body.account, body.password);
  }

  /// ATUALIZA UM USUÁRIO
  @Patch('update/id=:id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update do usuário' })
  @ApiBody({ type: RegisterUserDto })
  @ApiResponse({
    status: 201,
    description: 'Usuário editado com sucesso',
    type: User,
  })
  async update(@Param('id', ParseUUIDPipe)id: string,@Body() dto: UpdateUserDto,@Request() req,){
    return await this.authService.updateUser(id, dto, req.user.userId)
  }

  ///DELETE UM USUÁRIO
  @Delete('delete/id=:id')
  @Roles(UserRoles.ADMIN)
  @ApiOperation({ summary: 'Deletar um usuário' })
  @ApiBody({ type: LoginUserDto })
  @ApiResponse({
    status: 201,
    description: 'Usuário deletado com sucesso',
    type: User,
  })
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id', ParseUUIDPipe)id: string) {
    return await this.authService.deleteUser(id)
  }
}