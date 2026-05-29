import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { RegistrationsTeamCreateService } from '../use-cases/create-registration/create-registration-team.service';
import { RegistrationTeam } from '../models/entity/registration-team.entity';
import { CreateTeamDto } from '../../teams/models/dtos/create-team.dto';
import { RegistrationTeamFindService } from '../use-cases/find-registration/find-registration.service';
import { RegistrationTeamDeleteService } from '../use-cases/delete-registration/delete-registration.service';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

@Controller('registrations/team')
export class RegistrationsTeamController {
  constructor(
    private readonly registrationCreateService: RegistrationsTeamCreateService,
    private readonly registrationFindService: RegistrationTeamFindService,
    private readonly registrationDeleteService: RegistrationTeamDeleteService,
  ) {}

  @Get('all')
  @ApiOperation({ summary: 'Retorna todos os registros de times' })
  @ApiOkResponse({ description: 'Sucesso' })
  async getAllRegistrationsTeam(): Promise<RegistrationTeam[]> {
    return await this.registrationFindService.allRegisters();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta um registro de time pelo id' })
  @ApiNoContentResponse({ description: 'Deletado com sucesso!' })
  async deleteRegistration(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<RegistrationTeam> {
    return await this.registrationDeleteService.execute(id);
  }

  @Post('new/:id')
  @ApiOperation({
    summary: 'Cria um registro de time',
    description: 'No header é passado o id do Campeonato',
  })
  @ApiCreatedResponse({ description: 'Registrado com sucesso!' })
  @ApiBadRequestResponse({ description: 'Credenciais inválidas' })
  async createRegistration(
    @Param('id', ParseUUIDPipe) championshipId: string,
    @Body() createTeamDto: CreateTeamDto,
  ): Promise<RegistrationTeam> {
    return await this.registrationCreateService.execute(
      championshipId,
      createTeamDto,
    );
  }
}
