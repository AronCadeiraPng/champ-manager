import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  ParseUUIDPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { Roles } from '../../decorators/roles.decorator';
import { UserRolesEnum } from '../../common/enums/user-roles.enum';
import {
  ApiBadRequestResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateRegistrationSoloDto } from '../models/dtos/create-registration.dto';
import { RegistrationSoloFindService } from '../use-cases/find-registration/find-registration.service';
import { RegistrationSoloCreateService } from '../use-cases/create-registration/create-registration.service';
import { RegistrationSoloDeleteService } from '../use-cases/delete-registration/delete-registration.service';
import { RegistrationSolo } from '../models/entity/registration.entity';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../../common/guards/roles.guard';
import { RegistrationSoloListDto } from '../models/dtos/registrations-solo-list.dto';

@ApiTags('registrations-solo')
@Controller('registrations/solo')
export class RegistrationsSoloController {
  constructor(
    private readonly registrationFindService: RegistrationSoloFindService,
    private readonly registrationCreateService: RegistrationSoloCreateService,
    private readonly registrationDeleteService: RegistrationSoloDeleteService,
  ) {}

  @Post(':championship/new/:user')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRolesEnum.ADMIN)
  @ApiOperation({
    summary: 'Cria um novo registro individual em um campeonato',
  })
  @ApiOkResponse({ type: () => CreateRegistrationSoloDto })
  @ApiBadRequestResponse({ description: 'Credenciais inválidas' })
  async register(
    @Param('championship', ParseUUIDPipe) championshipId: string,
    @Param('user', ParseUUIDPipe) userId: string,
  ): Promise<RegistrationSolo> {
    return await this.registrationCreateService.register(
      championshipId,
      userId,
    );
  }

  @Get('all')
  @ApiOperation({ summary: 'Retorna todos os registros' })
  @ApiOkResponse({ type: () => RegistrationSoloListDto })
  @ApiNoContentResponse({ description: 'Nenhum registro encontrado' })
  async getAllRegistrations(): Promise<RegistrationSolo[]> {
    return await this.registrationFindService.allRegisters();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um registro por id' })
  @ApiOkResponse({ type: () => RegistrationSoloListDto })
  @ApiBadRequestResponse({ description: 'Registro não encontrado' })
  async getRegistrationById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<RegistrationSolo> {
    return await this.registrationFindService.findRegisterById(id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRolesEnum.ADMIN)
  @ApiOperation({ summary: 'Deletar um registro' })
  @ApiNoContentResponse({ description: 'Registro deletado com sucesso' })
  @ApiBadRequestResponse({ description: 'Registro não encontrado' })
  async delete(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<RegistrationSolo> {
    return await this.registrationDeleteService.deleteRegistrationSolo(id);
  }
}
