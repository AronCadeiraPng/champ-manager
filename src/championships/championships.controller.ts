import { Controller, Get, Post, Body, Param, ParseUUIDPipe, UseGuards, Delete, Patch } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiBearerAuth,
  ApiParam,
} from '@nestjs/swagger';
import { ChampionshipsService } from './championships.service';
import { CreateChampionshipDto } from './dto/create-championship.dto';
import { Championship } from './entities/championship.entity';
import { Roles } from 'src/decorators/roles.decorator';
import { UserRoles } from 'src/common/enums/user-roles.enum';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UpdateChampionshipDto } from './dto/update-championship.dto';
import { Registration } from 'src/registrations/entities/registration.entity';

@ApiTags('Championships')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('championships')
export class ChampionshipsController {
  constructor(
    private readonly championshipsService: ChampionshipsService
  ) {};


  ///=========================CRIA UM NOVO TORNEIO=========================///
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
    return this.championshipsService.createChampionship(createChampionshipDto);
  }


  ///=========================DELETE=========================///
  @Delete('delete/:id')
  async deleteChampionship(
    @Param('id', ParseUUIDPipe) id: string
  )
  {
    return this.championshipsService.deleteChampionship(id)
  }


  ///=========================UPDATE=========================///
  @Patch('update/:id')
  async updateChampionship(
    @Param('id', ParseUUIDPipe) id: string, 
    @Body() updateChampionshipDto: UpdateChampionshipDto
  )
  {
    return this.championshipsService.updateChampionship(id, updateChampionshipDto)
  }


  ///=========================RETORNA REGISTRATIONS (INSCRIÇÕES)=========================///
  @Get(':id/registrations')
  @ApiOperation({ summary: 'Retorna as inscrições de um torneio' })
  @ApiParam({ name: 'id', description: 'UUID do torneio', format: 'uuid' })
  @ApiResponse({ status: 200, description: 'Inscrições retornadas', type: Registration })
  @ApiResponse({ status: 404, description: 'Torneio não encontrado' })
  async findAllRegistrations(
    @Param('id', ParseUUIDPipe) id: string
  )
  {
    return this.championshipsService.findAllRegistrations(id)
  }


  ///=========================RETORNA UM TORNEIO POR ID=========================///
  @Get('id=:id')
  @Roles(UserRoles.ADMIN, UserRoles.MANAGER)
  @ApiOperation({ summary: 'Busca um torneio pelo ID' })
  @ApiParam({ name: 'id', description: 'UUID do torneio', format: 'uuid' })
  @ApiResponse({ status: 200, description: 'Torneio encontrado', type: Championship })
  @ApiResponse({ status: 401, description: 'Token inválido ou ausente' })
  @ApiResponse({ status: 403, description: 'Sem permissão para visualizar este torneio' })
  @ApiResponse({ status: 404, description: 'Torneio não encontrado' })
  async findChampionshipById(
    @Param('id', ParseUUIDPipe) id: string
  )
  {
    return this.championshipsService.findChampionshipById(id);
  }


  ///=========================RETORNA TODOS OS TORNEIOS=========================///
  @Get('all')
  @Roles(UserRoles.ADMIN, UserRoles.MANAGER)
  @ApiOperation({ summary: 'Lista todos os torneios' })
  @ApiResponse({ status: 200, description: 'Lista de torneios', type: [Championship] })
  @ApiResponse({ status: 401, description: 'Token inválido ou ausente' })
  @ApiResponse({ status: 403, description: 'Sem permissão para listar torneios' })
  async getAllChampionships() 
  {
    return this.championshipsService.findAllChampionships();
  }
}