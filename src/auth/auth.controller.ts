import { Controller, Post, Body, Patch, UseGuards, ParseUUIDPipe, Param, Request, Delete, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/users/models/entity/user.entity';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UpdateUserDto } from 'src/users/models/dtos/update-user.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { UserRoles } from 'src/common/enums/user-roles.enum';
import { RolesGuard } from 'src/common/guards/roles.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }



  @Post('login')
  @ApiOperation({ summary: 'Login do usuário' })
  @ApiBody({ type: LoginUserDto })
  @ApiResponse({ status: HttpStatus.OK, description: 'Usuário logado com sucesso', type: User })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Permissão negada' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Usuário não encontrado' })
  async login(
    @Body() body: LoginUserDto
  )
  {
    return await this.authService.loginUser(body.account, body.password);
  }



  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update do usuário' })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ status: HttpStatus.OK, description: 'Usuário atualizado com sucesso', type: User })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Permissão negada' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Usuário não encontrado' })
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateUserDto, @Request() req,
  )
  {
    return await this.authService.updateUser(id, dto, req.user.userId)
  }



  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Roles(UserRoles.ADMIN)
  @ApiOperation({ summary: 'Deletar um usuário' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'Usuário deletado com sucesso', type: User })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Permissão negada' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Usuário não encontrado' })
  async delete(
    @Param('id', ParseUUIDPipe) id: string
  ) 
  {
    return await this.authService.deleteUser(id)
  }
}