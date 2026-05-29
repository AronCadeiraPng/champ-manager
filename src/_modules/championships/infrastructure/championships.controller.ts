import { Controller, UseGuards, Post, Body, Get, Param, ParseUUIDPipe, Delete, Patch, Request } from "@nestjs/common";
import { ApiTags, ApiBearerAuth, ApiOperation, ApiBody, ApiCreatedResponse, ApiBadRequestResponse, ApiUnauthorizedResponse, ApiForbiddenResponse, ApiOkResponse, ApiNoContentResponse, ApiParam } from "@nestjs/swagger";
import { UserRolesEnum } from "../../../_common/enums/user-roles.enum";
import { RolesGuard } from "../../../_common/guards/roles.guard";
import { Roles } from "../../../_decorators/roles.decorator";
import { JwtAuthGuard } from "../../../auth/guards/jwt-auth.guard";
import { RegistrationSoloListDto } from "../../registrations-solo/models/dtos/registrations-solo-list.dto";
import { RegistrationTeamListDto } from "../../registrations-team/models/dtos/registrations-team-list.dto";
import { CreateChampionshipDto } from "../models/dtos/create-championship.dto";
import { UpdateChampionshipDto } from "../models/dtos/update-championship.dto";
import { Championship } from "../models/entity/championship.entity";
import { ChampionshipCreateService } from "../use-cases/create-championship/create-championship.service";
import { ChampionshipDeleteService } from "../use-cases/delete-championship/delete-championship-solo.service";
import { ChampionshipFindService } from "../use-cases/find-championship/find-championship.service";
import { ChampionshipFindRegistrationsService } from "../use-cases/find-registrations/find-registrations.service";
import { ChampionshipStartService } from "../use-cases/start-championship/start-championship.service";
import { StartGroupPhaseService } from "../use-cases/start-group-phase/start-group-phase.service";
import { ChampionshipUpdateService } from "../use-cases/update-championship/update-championship.service";

@ApiTags('Championships')
@ApiBearerAuth()
@Controller('championships/solo')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ChampionshipsController {
  constructor(
    private readonly championshipCreateService: ChampionshipCreateService,
    private readonly championshipFindService: ChampionshipFindService,
    private readonly championshipDeleteService: ChampionshipDeleteService,
    private readonly championshipUpdateService: ChampionshipUpdateService,
    private readonly championshipStartService: ChampionshipStartService,
    private readonly championshipRegistrationsFindService: ChampionshipFindRegistrationsService,
    private readonly startGroupPhaseService: StartGroupPhaseService,
  ) {}

  @Post('create')
  @Roles(UserRolesEnum.ADMIN)
  @ApiOperation({ summary: 'Cria um novo torneio', description: 'Apenas administradores podem criar torneios' })
  @ApiBody({ type: CreateChampionshipDto })
  @ApiCreatedResponse({ description: 'Torneio criado com sucesso', type: Championship })
  @ApiBadRequestResponse({ description: 'Dados inválidos' })
  @ApiUnauthorizedResponse({ description: 'Token inválido ou ausente' })
  @ApiForbiddenResponse({ description: 'Sem permissão para criar torneios' })
  async createChampionship(
    @Body() createChampionshipDto: CreateChampionshipDto,
  ) {
    return await this.championshipCreateService.createChampionship(createChampionshipDto);
  }

  @Get('all')
  @Roles(UserRolesEnum.USER, UserRolesEnum.ADMIN, UserRolesEnum.MANAGER)
  @ApiOperation({ summary: 'Lista todos os torneios' })
  @ApiOkResponse({ type: CreateChampionshipDto })
  @ApiNoContentResponse({ description: 'Nenhum torneio encontrado' })
  @ApiForbiddenResponse({ description: 'Permissão negada' })
  async getAllChampionships(): Promise<Championship[]> {
    return this.championshipFindService.findAllChampionships();
  }

  @Get('user')
  async findByUser(
    @Request() request: any
  )
  {
    return await this.championshipFindService.byUser(request.user.sub);
  }

  @Get(':id')
  @Roles(UserRolesEnum.ADMIN, UserRolesEnum.MANAGER)
  @ApiOperation({ summary: 'Busca um torneio pelo id' })
  @ApiParam({ name: 'id', description: 'UUID do torneio', format: 'uuid' })
  @ApiOkResponse({ type: () => CreateChampionshipDto })
  @ApiBadRequestResponse({ description: 'Torneio não encontrando' })
  @ApiForbiddenResponse({ description: 'Permissão negada' })
  async findChampionshipById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<Championship> {
    return this.championshipFindService.findChampionshipById(id);
  }

  @Get(':id/registrations')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRolesEnum.ADMIN, UserRolesEnum.MANAGER)
  @ApiOperation({
    summary: 'Lista as inscrições de um torneio',
    description: 'Pode listar tanto inscrições individuais quanto de times',
  })
  @ApiOkResponse({ type: RegistrationSoloListDto || RegistrationTeamListDto })
  @ApiBadRequestResponse({ description: 'Torneio não encontrando' })
  @ApiForbiddenResponse({ description: 'Permissão negada' })
  async getAllRegistrationsByChampionship(
    @Param('id', ParseUUIDPipe) championshipId: string,
  ) {
    return this.championshipRegistrationsFindService.findRegistrations(
      championshipId,
    );
  }

  @Delete(':id')
  @Roles(UserRolesEnum.ADMIN, UserRolesEnum.MANAGER)
  @ApiOperation({
    summary: 'Deleta um torneio por id',
    description: 'Apenas administradores podem deletar torneios',
  })
  @ApiNoContentResponse({ description: 'Torneio deletado com sucesso' })
  @ApiBadRequestResponse({ description: 'Torneio não encontrando' })
  @ApiForbiddenResponse({ description: 'Permissão negada' })
  async deleteChampionship(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<Championship> {
    return this.championshipDeleteService.deleteChampionship(id);
  }

  @Patch(':id')
  @Roles(UserRolesEnum.ADMIN, UserRolesEnum.MANAGER)
  @ApiOperation({ summary: 'Atualiza um torneio pelo id' })
  @ApiBadRequestResponse({ description: 'Torneio não encontrando' })
  @ApiForbiddenResponse({ description: 'Permissão negada' })
  async updateChampionship(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateChampionshipDto: UpdateChampionshipDto,
  ): Promise<Championship> {
    return this.championshipUpdateService.updateChampionship(
      id,
      updateChampionshipDto,
    );
  }

  @Post(':id/start')
  @ApiOperation({ summary: 'Inicia um torneio pela fase de grupo' })
  @ApiBadRequestResponse({ description: 'Torneio não encontrando' })
  @ApiForbiddenResponse({ description: 'Permissão negada' })
  async convertRegistrations(
    @Param('id', ParseUUIDPipe) championshipId: string,
  ) {
    return this.championshipStartService.start(championshipId);
  }

  @Post(':id/start/group')
  @Roles(UserRolesEnum.ADMIN, UserRolesEnum.MANAGER)
  async startGroupPhase(
    @Param('id', ParseUUIDPipe) championshipId: string,
  ) {
    return await this.startGroupPhaseService.execute(championshipId);
  }
}
