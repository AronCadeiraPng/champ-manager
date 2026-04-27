import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse
} from '@nestjs/swagger';
import { RolesGuard } from '../../common/guards/roles.guard';
import { CreateChampionshipDto } from '../models/dtos/create-championship.dto';
import { UpdateChampionshipDto } from '../models/dtos/update-championship.dto';
import { Championship } from '../models/entity/championship.entity';
import { ChampionshipCreateService } from '../use-cases/create-championship/create-championship.service';
import { ChampionshipDeleteService } from '../use-cases/delete-championship/delete-championship-solo.service';
import { ChampionshipFindService } from '../use-cases/find-championship/find-championship.service';
import { ChampionshipFindRegistrationsService } from '../use-cases/find-registrations/find-registrations.service';
import { ChampionshipStartService } from '../use-cases/start-championship/start-championship.service';
import { ChampionshipUpdateService } from '../use-cases/update-championship/update-championship.service';
import { UserRoles } from '../../common/enums/user-roles.enum';
import { Roles } from '../../decorators/roles.decorator';
import { RegistrationTeamListDto } from '../../registrations-team/models/dtos/registrations-team-list.dto';
import { RegistrationSoloListDto } from '../../registrations-solo/models/dtos/registrations-solo-list.dto';

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
    private readonly championshipRegistrationsFindService: ChampionshipFindRegistrationsService

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
  )
  {
    return this.championshipRegistrationsFindService.findRegistrations(championshipId);
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