import { Controller, Get, Post, Body, Param, UseGuards, HttpStatus } from '@nestjs/common';
import { RegisterUserDto } from '../models/dtos/register-user.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from '../models/entity/user.entity';
import { ParseUUIDPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/decorators/roles.decorator';
import { UserRoles } from 'src/common/enums/user-roles.enum';
import { UserRegisterService } from '../use-cases/register-user/user-register.service';
import { UserFindService } from '../use-cases/find-user/find-user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userFindService: UserFindService,
    private readonly userRegisterService: UserRegisterService,
  ) { }


  ///=========================REGISTRAR UM NOVO USUÁRIO=========================///
  @Post('register')
  @ApiOperation({ summary: 'Registra um novo usuário' })
  @ApiBody({ type: RegisterUserDto })
  @ApiResponse({ status: HttpStatus.OK, description: 'Usuário criado com sucesso', type: User })
  async create(
    @Body() registerUserDto: RegisterUserDto
  ) 
  {
    return await this.userRegisterService.registerUser(registerUserDto);
  }
  ///=========================RETORNA TODOS OS USUÁRIOS=========================///
  @Get('all')
  @Roles(UserRoles.ADMIN, UserRoles.MANAGER)
  @ApiOperation({ summary: 'Retorna todos os usuários' })
  @ApiResponse({ status: HttpStatus.OK, type: User })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Permissão negada' })
  async findAllUsers() 
  {
    return await this.userFindService.findAllUsers()
  }


  ///=========================RETORNA USUÁRIO POR ID=========================///
  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @Roles(UserRoles.ADMIN, UserRoles.MANAGER)
  @ApiOperation({ summary: 'Retorna todos os usuários' })
  @ApiResponse({ status: HttpStatus.OK, type: User })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Permissão negada' })
  async findUserById(
    @Param('id', ParseUUIDPipe) id: string
  )
  {
    return await this.userFindService.findUserById(id);
  }
}
