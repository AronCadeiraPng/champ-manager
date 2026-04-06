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


  ///=========================DELETE=========================///
  @Delete('delete/:id')
  async deleteChampionship(
    @Param('id', ParseUUIDPipe) id: string
  )
  {
    return this.championshipDeleteService.deleteChampionship(id)
  }


  ///=========================UPDATE=========================///
  @Patch('update/:id')
  async updateChampionship(
    @Param('id', ParseUUIDPipe) id: string, 
    @Body() updateChampionshipDto: UpdateChampionshipSoloDto
  )
  {
    return this.championshipUpdateService.updateChampionship(id, updateChampionshipDto)
  }

  ///=========================RETORNA TODOS OS TORNEIOS=========================///
  @Get('all')
  @Roles(UserRoles.ADMIN, UserRoles.MANAGER)
  @ApiOperation({ summary: 'Lista todos os torneios' })
  @ApiResponse({ status: 200, description: 'Lista de torneios', type: [ChampionshipSolo] })
  @ApiResponse({ status: 401, description: 'Token inválido ou ausente' })
  @ApiResponse({ status: 403, description: 'Sem permissão para listar torneios' })
  async getAllChampionships() 
  {
    return this.championshipFindService.findAllChampionshipsSolo();
  }

  ///=========================RETORNA UM TORNEIO POR ID=========================///
  @Get(':id')
  @Roles(UserRoles.ADMIN, UserRoles.MANAGER)
  @ApiOperation({ summary: 'Busca um torneio pelo ID' })
  @ApiParam({ name: 'id', description: 'UUID do torneio', format: 'uuid' })
  @ApiResponse({ status: 200, description: 'Torneio encontrado', type: ChampionshipSolo })
  @ApiResponse({ status: 401, description: 'Token inválido ou ausente' })
  @ApiResponse({ status: 403, description: 'Sem permissão para visualizar este torneio' })
  @ApiResponse({ status: 404, description: 'Torneio não encontrado' })
  async findChampionshipById(
    @Param('id', ParseUUIDPipe) id: string
  )
  {
    return this.championshipFindService.findChampionshipSoloById(id);
  }
}