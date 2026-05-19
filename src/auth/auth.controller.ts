import {
  Controller,
  Post,
  Body,
  Patch,
  UseGuards,
  ParseUUIDPipe,
  Param,
  Request,
  Delete,
  HttpStatus,
  Res,
  Get,
  Req,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiForbiddenResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { User } from '../users/models/entity/user.entity';
import { UpdateUserDto } from '../users/models/dtos/update-user.dto';
import { Roles } from '../_decorators/roles.decorator';
import { UserRolesEnum } from '../_common/enums/user-roles.enum';
import { RolesGuard } from '../_common/guards/roles.guard';
import type { Response } from 'express';
import { Public } from '../_decorators/is-public.decorator';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Cookies } from '../_decorators/cookie.decorator';

@ApiTags('Auth')
@Controller('user/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Login do usuário' })
  @ApiBody({ type: LoginUserDto })
  @ApiOkResponse({ description: 'Usuário logado com sucesso', type: User })
  @ApiNotFoundResponse({ description: 'Usuário não encontrado' })
  async login(@Body() body: LoginUserDto, @Res() response: Response) {

    
    const accessToken = await this.authService.loginUser(
      body.account,
      body.password,
    );

    response
    .status(HttpStatus.OK)
    .cookie('accessToken', accessToken, {
      path: '/',
      secure: false,
      httpOnly: true,
      sameSite: 'lax',
    })
    .send({ message: 'Cookie configurado...' });
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRolesEnum.USER, UserRolesEnum.ADMIN, UserRolesEnum.MANAGER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update do usuário' })
  @ApiBody({ type: UpdateUserDto })
  @ApiOkResponse({ description: 'Usuário atualizado com sucesso', type: User })
  @ApiForbiddenResponse({ description: 'Permissão negada' })
  @ApiNotFoundResponse({ description: 'Usuário não encontrado' })
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateUserDto, 
    @Request() req: any
  )
  {
    return await this.authService.updateUser(id, dto, req.user.sub);
  }

  @Get('cookies')
  findCookie(@Cookies('nome_do_cookie') session: string) {
    return session;
  }


  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Roles(UserRolesEnum.ADMIN)
  @ApiOperation({ summary: 'Deletar um usuário' })
  @ApiNoContentResponse({
    description: 'Usuário deletado com sucesso',
    type: User,
  })
  @ApiForbiddenResponse({ description: 'Permissão negada' })
  @ApiNotFoundResponse({ description: 'Usuário não encontrado' })
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    return await this.authService.deleteUser(id);
  }
}
