import { Controller, Get, Post, Body, Param, UseGuards, HttpStatus } from '@nestjs/common';
import { RegisterUserDto } from '../models/dtos/register-user.dto';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { User } from '../models/entity/user.entity';
import { ParseUUIDPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/decorators/roles.decorator';
import { UserRolesEnum } from 'src/common/enums/user-roles.enum';
import { UserRegisterService } from '../use-cases/register-user/user-register.service';
import { UserFindService } from '../use-cases/find-user/find-user.service';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { UsersListDto } from '../models/dtos/users-list.dto';
import { Logger } from 'nestjs-pino';


@ApiTags('users')
@Controller('user')
export class UserController {
  // private readonly logger = new Logger(UserController.name);
  
  
  constructor(
    private readonly userFindService: UserFindService,
    private readonly userRegisterService: UserRegisterService,
  ) { }

  @Post('register')
  @ApiOperation({ summary: 'Registra um novo usuário' })
  @ApiBody({ type: RegisterUserDto })
  @ApiCreatedResponse({ description: 'Usuário criado com sucesso!', type: User, example: {
    name: 'Gabriel Pinheiro',
    gender: 'masculine',
    email: 'gabriel.pinheiro@gmail.com',
    cpf: '100.100.100-11',
    password: 'senha123'
  } })
  @ApiBadRequestResponse({ description: 'Credenciais inválidas!' })
  async create(
    @Body() registerUserDto: RegisterUserDto
  ): Promise<User>
  {
    return await this.userRegisterService.registerUser(registerUserDto);
  }


  @Get('all')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRolesEnum.ADMIN, UserRolesEnum.MANAGER)
  @Roles(UserRolesEnum.ADMIN, UserRolesEnum.MANAGER)
  @ApiOperation({ summary: 'Retorna todos os usuários' })
  @ApiOkResponse({ type: () =>  UsersListDto})
  @ApiNoContentResponse({ description: 'Nenhum usuário encontrado' })
  @ApiUnauthorizedResponse({ description: 'Permissão negada' })
  async findAllUsers(): Promise<User[]>
  {
    return await this.userFindService.findAllUsers()
  }


  @Get(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRolesEnum.ADMIN, UserRolesEnum.MANAGER)
  @ApiOperation({ summary: 'Retorna um usuário pelo id' })
  @ApiOkResponse({ type: () => UsersListDto })
  @ApiNotFoundResponse({ description: 'Usuário não encontrado' })
  @ApiUnauthorizedResponse({ description: 'Permissão negada' })
  async findUserById(
    @Param('id', ParseUUIDPipe) id: string
  ): Promise<User>
  {
    return await this.userFindService.findUserById(id);
  }
}
