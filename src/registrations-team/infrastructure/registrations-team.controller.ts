import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { RegistrationsTeamCreateService } from '../use-cases/create-registration/create-registration-team.service';
import { RegistrationTeam } from '../models/entity/registration-team.entity';
import { CreateTeamDto } from 'src/teams/models/dtos/create-team.dto';

@Controller('registrations/team')
export class RegistrationsTeamController {
  constructor(private readonly registrationCreateService: RegistrationsTeamCreateService) {}

  @Post('new/:id')
  async createRegistration(
    @Param('id', ParseUUIDPipe) championshipId: string,
    @Body() createTeamDto: CreateTeamDto
  ): Promise<RegistrationTeam>
  {
    return await this.registrationCreateService.create(championshipId, createTeamDto)
  }
}
