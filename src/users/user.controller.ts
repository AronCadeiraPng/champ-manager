import { Controller, Get, Post, Body, Param, UseGuards, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { ParseUUIDPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/decorators/roles.decorator';
import { UserRoles } from 'src/common/enums/user-roles.enum';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }


  ///=========================REGISTRAR UM NOVO USUÁRIO=========================///
  @Post('register')
  @ApiOperation({ summary: 'Registra um novo usuário' })
  @ApiBody({ type: RegisterUserDto })
  @ApiResponse({ status: HttpStatus.OK, description: 'Usuário criado com sucesso', type: User })
  async create(
    @Body() registerUserDto: RegisterUserDto
  ) 
  {
    return await this.userService.registerUser(registerUserDto);
  }


  ///=========================RETORNA TODOS OS USUÁRIOS=========================///
  @Get('all')
  @Roles(UserRoles.ADMIN, UserRoles.MANAGER)
  @ApiOperation({ summary: 'Retorna todos os usuários' })
  @ApiResponse({ status: HttpStatus.OK, type: User })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Permissão negada' })
  async findAllUsers() 
  {
    return await this.userService.findAllUsers()
  }


  ///=========================RETORNA USUÁRIO POR ID=========================///
  @Get('id=:id')
  @UseGuards(AuthGuard('jwt'))
  @Roles(UserRoles.ADMIN, UserRoles.MANAGER)
  @ApiOperation({ summary: 'Retorna todos os usuários' })
  @ApiResponse({ status: HttpStatus.OK, type: User })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Permissão negada' })
  async findUserById(
    @Param('id', ParseUUIDPipe) id: string
  )
  {
    return await this.userService.findUserById(id);
  }
}
