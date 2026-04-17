import { Controller, Get, Post, Body, Param, ParseUUIDPipe, UseGuards, Delete, Patch } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiBearerAuth,
  ApiParam,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiUnauthorizedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiNoContentResponse,
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
import { AuthGuard } from '@nestjs/passport';
import { RegistrationTeamListDto } from 'src/registrations-team/models/dtos/registrations-team-list.dto';
import { RegistrationSoloListDto } from 'src/registrations-solo/models/dtos/registrations-solo-list.dto';

@ApiTags('Championships')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'), RolesGuard)
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
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRoles.ADMIN)
  @ApiOperation({ summary: 'Cria um novo torneio', description: 'Apenas administradores podem criar torneios' })
  @ApiBody({ type: CreateChampionshipDto })
  @ApiCreatedResponse({ description: 'Torneio criado com sucesso', type: Championship })
  @ApiBadRequestResponse({ description: 'Dados inválidos' })
  @ApiUnauthorizedResponse({ description: 'Token inválido ou ausente' })
  @ApiForbiddenResponse({ description: 'Sem permissão para criar torneios' })
  async createChampionship(
    @Body() createChampionshipDto: CreateChampionshipDto
  )
  {
    return await this.championshipCreateService.createChampionship(createChampionshipDto);
  }
  
  
  @Get('all')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRoles.ADMIN, UserRoles.MANAGER)
  @ApiOperation({ summary: 'Lista todos os torneios' })
  @ApiOkResponse({ type: CreateChampionshipDto })
  @ApiNoContentResponse({ description: 'Nenhum torneio encontrado' })
  @ApiForbiddenResponse({ description: 'Permissão negada' })
  async getAllChampionships(): Promise<Championship[]>
  {
    return this.championshipFindService.findAllChampionships();
  }


  @Get(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRoles.ADMIN, UserRoles.MANAGER)
  @ApiOperation({ summary: 'Busca um torneio pelo id' })
  @ApiParam({ name: 'id', description: 'UUID do torneio', format: 'uuid' })
  @ApiOkResponse({ type: () => CreateChampionshipDto })
  @ApiBadRequestResponse({ description: 'Torneio não encontrando' })
  @ApiForbiddenResponse({ description: 'Permissão negada' })
  async findChampionshipById(
    @Param('id', ParseUUIDPipe) id: string
  ): Promise<Championship>
  {
    return this.championshipFindService.findChampionshipById(id);
  }
  

  @Get(':id/registrations')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRoles.ADMIN, UserRoles.MANAGER)
  @ApiOperation({ summary: 'Lista as inscrições de um torneio', description: 'Pode listar tanto inscrições individuais quanto de times' })
  @ApiOkResponse({ type: RegistrationSoloListDto ||  RegistrationTeamListDto})
  @ApiBadRequestResponse({ description: 'Torneio não encontrando' })
  @ApiForbiddenResponse({ description: 'Permissão negada' })
  async getAllRegistrationsByChampionship(
    @Param('id', ParseUUIDPipe) championshipId: string
  ): Promise<RegistrationSolo[] | RegistrationTeam[]>
  {
    return this.registrationSoloFindService.findRegistrationsByChampionship(championshipId);
  }


  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRoles.ADMIN, UserRoles.MANAGER)
  @ApiOperation({ summary: 'Deleta um torneio por id', description: 'Apenas administradores podem deletar torneios' })
  @ApiNoContentResponse({ description: 'Torneio deletado com sucesso' })
  @ApiBadRequestResponse({ description: 'Torneio não encontrando' })
  @ApiForbiddenResponse({ description: 'Permissão negada' })
  async deleteChampionship(
    @Param('id', ParseUUIDPipe) id: string
  ): Promise<Championship>
  {
    return this.championshipDeleteService.deleteChampionship(id)
  }


  @Patch(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRoles.ADMIN, UserRoles.MANAGER)
  @ApiOperation({ summary: 'Atualiza um torneio pelo id' })
  @ApiBadRequestResponse({ description: 'Torneio não encontrando' })
  @ApiForbiddenResponse({ description: 'Permissão negada' })
  async updateChampionship(
    @Param('id', ParseUUIDPipe) id: string, 
    @Body() updateChampionshipDto: UpdateChampionshipDto
  ): Promise<Championship>
  {
    return this.championshipUpdateService.updateChampionship(id, updateChampionshipDto)
  }


  @Post(':id/start')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @ApiOperation({ summary: 'Inicia um torneio pela fase de grupo' })
  @ApiBadRequestResponse({ description: 'Torneio não encontrando' })
  @ApiForbiddenResponse({ description: 'Permissão negada' })
  async convertRegistrations(
    @Param('id', ParseUUIDPipe) championshipId: string
  )
  {
    return this.championshipStartService.start(championshipId);
  }
}