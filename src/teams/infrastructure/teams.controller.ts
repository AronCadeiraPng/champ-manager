import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateTeamDto } from '../models/dtos/create-team.dto';
import { TeamCreateService } from '../use-cases/create-team/create-team.service';
import { Team } from '../models/entity/team.entity';
import { TeamFindService } from '../use-cases/find-team/find-team.service';
import { TeamDeleteService } from '../use-cases/delete-team/delete-team.service';

@Controller('teams')
export class TeamsController {
  constructor(
    private readonly teamCreateService: TeamCreateService,
    private readonly teamFindService: TeamFindService,
    private readonly teamDeleteService: TeamDeleteService
  ) {}

  @Post()
  create(
    @Body() createTeamDto: CreateTeamDto
  )
  {
    return this.teamCreateService.execute(createTeamDto)
  }

  @Get('all')
  async getAllTeams(): Promise<Team[]>
  { 
    return await this.teamFindService.findTeamByAll()
  }

  @Delete('all')
  async deleteAllTeams()
  {
    return await this.teamDeleteService.deleteAllTeams()
  }
}
