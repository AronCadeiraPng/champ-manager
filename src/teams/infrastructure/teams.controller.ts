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
import { CreateTeamDto } from '../models/dtos/create-team.dto';
import { TeamCreateService } from '../use-cases/create-team/create-team.service';
import { Team } from '../models/entity/team.entity';
import { TeamFindService } from '../use-cases/find-team/find-team.service';
import { TeamDeleteService } from '../use-cases/delete-team/delete-team.service';
import {
  ApiBadRequestResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

@Controller('teams')
export class TeamsController {
  constructor(
    private readonly teamCreateService: TeamCreateService,
    private readonly teamFindService: TeamFindService,
    private readonly teamDeleteService: TeamDeleteService,
  ) {}

  @Post('new')
  @ApiOperation({ summary: 'Cria um novo time' })
  @ApiOkResponse({ type: CreateTeamDto })
  @ApiBadRequestResponse({ description: 'Credenciais incorretas' })
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamCreateService.execute(createTeamDto);
  }

  @Get('all')
  @ApiOperation({ summary: 'Retorna todos os times' })
  @ApiOkResponse({ type: CreateTeamDto })
  @ApiNoContentResponse({ description: 'Nenhum time encontrado' })
  async getAllTeams(): Promise<Team[]> {
    return await this.teamFindService.allTeams();
  }

  @Delete('all')
  @ApiOperation({ summary: 'Deleta todos os times' })
  @ApiNoContentResponse({ description: 'Times deletados com sucesso' })
  async deleteAllTeams() {
    return await this.teamDeleteService.allTeams();
  }

  @Delete('all')
  @ApiOperation({ summary: 'Deleta um time pelo id' })
  @ApiNoContentResponse({ description: 'Time deletado com sucesso' })
  async deleteTeamById(@Param('id', ParseUUIDPipe) id: string) {
    return await this.teamDeleteService.byId(id);
  }
}
