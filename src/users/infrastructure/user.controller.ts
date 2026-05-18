import { Controller, Get, Post, Body, Param, UseGuards, Req, Request } from '@nestjs/common';
import { RegisterUserDto } from '../models/dtos/register-user.dto';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { User } from '../models/entity/user.entity';
import { ParseUUIDPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserRegisterService } from '../use-cases/register-user/user-register.service';
import { UserFindService } from '../use-cases/find-user/find-user.service';
import { UsersListDto } from '../models/dtos/users-list.dto';
import { UserRolesEnum } from '../../_common/enums/user-roles.enum';
import { RolesGuard } from '../../_common/guards/roles.guard';
import { Public } from '../../_decorators/is-public.decorator';
import { Roles } from '../../_decorators/roles.decorator';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@ApiTags('users')
@Controller('user')
export class UserController {
  // private readonly logger = new Logger(UserController.name);

  constructor(
    private readonly userFindService: UserFindService,
    private readonly userRegisterService: UserRegisterService,
  ) {}

  @Post('register')
  @Public()
  @ApiOperation({ summary: 'Registra um novo usuário' })
  @ApiBody({ type: RegisterUserDto })
  @ApiCreatedResponse({
    description: 'Usuário criado com sucesso!',
    type: User,
    example: {
      name: 'Gabriel Pinheiro',
      gender: 'masculine',
      email: 'gabriel.pinheiro@gmail.com',
      cpf: '100.100.100-11',
      password: 'senha123',
    },
  })
  @ApiBadRequestResponse({ description: 'Credenciais inválidas!' })
  async create(@Body() registerUserDto: RegisterUserDto) {
    return await this.userRegisterService.registerUser(registerUserDto);
  }

  @Get('all')
  @Public()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRolesEnum.ADMIN, UserRolesEnum.MANAGER)
  @ApiOperation({ summary: 'Retorna todos os usuários' })
  @ApiOkResponse({ type: () => UsersListDto })
  @ApiNoContentResponse({ description: 'Nenhum usuário encontrado' })
  @ApiUnauthorizedResponse({ description: 'Permissão negada' })
  async findAllUsers(): Promise<User[]> {
    return await this.userFindService.findAllUsers();
  }

  @Get('get-info')
  @Roles(UserRolesEnum.ADMIN, UserRolesEnum.MANAGER)
  async getUserInfo(
    @Request() request: any
  )
  {
    return await this.userFindService.findUserById(request.user.sub);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRolesEnum.ADMIN, UserRolesEnum.MANAGER)
  @ApiOperation({ summary: 'Retorna um usuário pelo id' })
  @ApiOkResponse({ type: () => UsersListDto })
  @ApiNotFoundResponse({ description: 'Usuário não encontrado' })
  @ApiUnauthorizedResponse({ description: 'Permissão negada' })
  async findUserById(@Param('id', ParseUUIDPipe) id: string): Promise<User> {
    return await this.userFindService.findUserById(id);
  }
}
