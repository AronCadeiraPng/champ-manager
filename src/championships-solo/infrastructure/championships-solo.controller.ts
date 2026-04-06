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
import { ChampionshipSoloFindService } from '../use-cases/find-championship/find-championship-solo.service';
import { ChampionshipSoloDeleteService } from '../use-cases/delete-championship/delete-championship-solo.service';
import { ChampionshipSoloCreateService } from '../use-cases/create-championship/create-championship-solo.service';
import { ChampionshipSoloUpdateService } from '../use-cases/update-championship/update-championship-solo.service';
import { ChampionshipSolo } from '../models/entity/championship-solo.entity';
import { UpdateChampionshipSoloDto } from '../models/dtos/update-championship-solo.dto';
import { CreateChampionshipSoloDto } from '../models/dtos/create-championship-solo.dto';

@ApiTags('Championships')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('championships/solo')
export class ChampionshipsController {
  constructor(
    private readonly championshipCreateService: ChampionshipSoloCreateService,
    private readonly championshipFindService: ChampionshipSoloFindService,
    private readonly championshipDeleteService: ChampionshipSoloDeleteService,
    private readonly championshipUpdateService: ChampionshipSoloUpdateService

  ) {};


  ///=========================CRIA UM NOVO TORNEIO=========================///
  @Post('create')
  @Roles(UserRoles.ADMIN)
  @ApiOperation({
    summary: 'Cria um novo torneio',
    description: 'Apenas administradores podem criar torneios',
  })
  @ApiBody({ type: CreateChampionshipSoloDto })
  @ApiResponse({ status: 201, description: 'Torneio criado com sucesso', type: ChampionshipSolo })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  @ApiResponse({ status: 401, description: 'Token inválido ou ausente' })
  @ApiResponse({ status: 403, description: 'Sem permissão para criar torneios' })
  async createChampionship(
    @Body() createChampionshipDto: CreateChampionshipSoloDto
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
    type: [ChampionshipSolo]
  })
  async getAllChampionships(): Promise<ChampionshipSolo[]>
  {
    return this.championshipFindService.findAllChampionshipsSolo();
  }


  @Roles(UserRoles.ADMIN, UserRoles.MANAGER)
  @Delete(':id')
  @ApiOperation({
    summary: 'Deleta um torneio por id',
    description: 'Apenas administradores podem deletar torneios',
  })
  async deleteChampionship(
    @Param('id', ParseUUIDPipe) id: string
  ): Promise<ChampionshipSolo>
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
    @Body() updateChampionshipDto: UpdateChampionshipSoloDto
  ): Promise<ChampionshipSolo>
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
    type: ChampionshipSolo
  })
  async findChampionshipById(
    @Param('id', ParseUUIDPipe) id: string
  ): Promise<ChampionshipSolo>
  {
    return this.championshipFindService.findChampionshipSoloById(id);
  }
}