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
  Res
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
  ApiTags
} from '@nestjs/swagger';
import { User } from 'src/users/models/entity/user.entity';
import { UpdateUserDto } from 'src/users/models/dtos/update-user.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { UserRolesEnum } from 'src/common/enums/user-roles.enum';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { AuthGuard } from '@nestjs/passport';
import type { Response } from 'express';
import { Public } from 'src/decorators/is-public.decorator';

@ApiTags('Auth')
@Controller('user/auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('login')
  @Public()
  @ApiOperation({ summary: 'Login do usuário' })
  @ApiBody({ type: LoginUserDto })
  @ApiOkResponse({ description: 'Usuário logado com sucesso', type: User })
  @ApiNotFoundResponse({ description: 'Usuário não encontrado' })
  async login(
    @Body() body: LoginUserDto,
    @Res() response: Response
  ) {
    const accessToken = await this.authService.loginUser(body.account, body.password);
    response.status(HttpStatus.OK)
      .cookie('accessToken', accessToken, {
        path: '/',
        secure: false,
        httpOnly: true,
        sameSite: 'lax'
      })
      .send({ message: 'Cookie configurado...' })
  }


  @Patch(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update do usuário' })
  @ApiBody({ type: UpdateUserDto })
  @ApiOkResponse({ description: 'Usuário atualizado com sucesso', type: User })
  @ApiForbiddenResponse({ description: 'Permissão negada' })
  @ApiNotFoundResponse({ description: 'Usuário não encontrado' })
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateUserDto, @Request() req,
  ) {
    return await this.authService.updateUser(id, dto, req.user.userId)
  }


  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @ApiBearerAuth()
  @Roles(UserRolesEnum.ADMIN)
  @ApiOperation({ summary: 'Deletar um usuário' })
  @ApiNoContentResponse({ description: 'Usuário deletado com sucesso', type: User })
  @ApiForbiddenResponse({ description: 'Permissão negada' })
  @ApiNotFoundResponse({ description: 'Usuário não encontrado' })
  async delete(
    @Param('id', ParseUUIDPipe) id: string
  ) {
    return await this.authService.deleteUser(id);
  }
}