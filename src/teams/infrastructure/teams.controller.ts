import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateTeamDto } from '../models/dtos/create-team.dto';
import { TeamCreateService } from '../use-cases/create-team/create-team.service';
import { Team } from '../models/entity/team.entity';

@Controller('teams')
export class TeamsController {
  constructor(
    private readonly teamCreateService: TeamCreateService
  ) {}

  @Post()
  create(
    @Body() createTeamDto: CreateTeamDto
  )
  {
    
  }
}
