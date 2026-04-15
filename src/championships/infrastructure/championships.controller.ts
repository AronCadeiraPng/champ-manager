import { Controller, Get, Post, Body, Param, ParseUUIDPipe, UseGuards, Delete, Patch } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiBearerAuth,
  ApiParam,
} from '@nestjs/swagger';
import { Roles } from 'src/decorators/roles.decorator';
import { UserRoles } from 'src/common/enums/user-roles.enum';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ChampionshipStartService } from '../use-cases/start-championship/start-championship.service';
import { CreateChampionshipDto } from '../models/dtos/create-championship.dto';
import { ChampionshipCreateService } from '../use-cases/create-championship/create-championship.service';
import { ChampionshipFindService } from '../use-cases/find-championship/find-championship.service';
import { ChampionshipDeleteService } from '../use-cases/delete-championship/delete-championship-solo.service';
import { ChampionshipUpdateService } from '../use-cases/update-championship/update-championship.service';
import { Championship } from '../models/entity/championship.entity';
import { UpdateChampionshipDto } from '../models/dtos/update-championship.dto';
import { RegistrationSolo } from 'src/registrations-solo/models/entity/registration.entity';
import { RegistrationTeam } from 'src/registrations-team/models/entity/registration-team.entity';
import { RegistrationSoloFindService } from 'src/registrations-solo/use-cases/find-registration/find-registration.service';

@ApiTags('Championships')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('championships/')
export class ChampionshipsController {
  constructor(
    private readonly championshipCreateService: ChampionshipCreateService,
    private readonly championshipFindService: ChampionshipFindService,
    private readonly championshipDeleteService: ChampionshipDeleteService,
    private readonly championshipUpdateService: ChampionshipUpdateService,
    private readonly championshipStartService: ChampionshipStartService,
    private readonly registrationSoloFindService: RegistrationSoloFindService

  ) {};


  @Post('create')
  @Roles(UserRoles.ADMIN)
  @ApiOperation({
    summary: 'Cria um novo torneio',
    description: 'Apenas administradores podem criar torneios',
  })
  @ApiBody({ type: CreateChampionshipDto })
  @ApiResponse({ status: 201, description: 'Torneio criado com sucesso', type: Championship })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  @ApiResponse({ status: 401, description: 'Token inválido ou ausente' })
  @ApiResponse({ status: 403, description: 'Sem permissão para criar torneios' })
  async createChampionship(
    @Body() createChampionshipDto: CreateChampionshipDto
  )
  {
    return await this.championshipCreateService.createChampionship(createChampionshipDto);
  }


  @Roles(UserRoles.ADMIN, UserRoles.MANAGER)
  @Get('all')
  @ApiOperation({ summary: 'Lista todos os torneios' })
  @ApiResponse({
    status: 200,
    description: 'Lista de torneios',
    type: [Championship]
  })
  async getAllChampionships(): Promise<Championship[]>
  {
    return this.championshipFindService.findAllChampionships();
  }

  @Roles(UserRoles.ADMIN, UserRoles.MANAGER)
  @Get(':id/registrations')
  @ApiOperation({ summary: 'Lista todos os torneios' })
  @ApiResponse({
    status: 200,
    description: 'Lista de torneios',
    type: [Championship]
  })
  async getAllRegistrationsByChampionship(
    @Param('id', ParseUUIDPipe) championshipId: string
  ): Promise<RegistrationSolo[] | RegistrationTeam[]>
  {
    return this.registrationSoloFindService.findRegistrationsByChampionship(championshipId);
  }

  @Roles(UserRoles.ADMIN, UserRoles.MANAGER)
  @Delete(':id')
  @ApiOperation({
    summary: 'Deleta um torneio por id',
    description: 'Apenas administradores podem deletar torneios',
  })
  async deleteChampionship(
    @Param('id', ParseUUIDPipe) id: string
  ): Promise<Championship>
  {
    return this.championshipDeleteService.deleteChampionship(id)
  }


  @Roles(UserRoles.ADMIN, UserRoles.MANAGER)
  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um torneio pelo id' })
  @ApiResponse({
    status: 200,
    description: 'Torneio atualizado!'
  })
  async updateChampionship(
    @Param('id', ParseUUIDPipe) id: string, 
    @Body() updateChampionshipDto: UpdateChampionshipDto
  ): Promise<Championship>
  {
    return this.championshipUpdateService.updateChampionship(id, updateChampionshipDto)
  }


  @Roles(UserRoles.ADMIN, UserRoles.MANAGER)
  @Get(':id')
  @ApiOperation({ summary: 'Busca um torneio pelo id' })
  @ApiParam({ name: 'id', description: 'UUID do torneio', format: 'uuid' })
  @ApiResponse({
    status: 200,
    description: 'Torneio encontrado',
    type: Championship
  })
  async findChampionshipById(
    @Param('id', ParseUUIDPipe) id: string
  ): Promise<Championship>
  {
    return this.championshipFindService.findChampionshipById(id);
  }

  @Post(':id/start')
  async convertRegistrations(
    @Param('id', ParseUUIDPipe) championshipId: string
  )
  {
    return this.championshipStartService.start(championshipId);
  }
}