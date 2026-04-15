import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { RegistrationsTeamCreateService } from '../use-cases/create-registration/create-registration-team.service';
import { RegistrationTeam } from '../models/entity/registration-team.entity';
import { CreateTeamDto } from 'src/teams/models/dtos/create-team.dto';
import { RegistrationTeamFindService } from '../use-cases/find-registration/find-registration.service';

@Controller('registrations/team')
export class RegistrationsTeamController {
  constructor(
    private readonly registrationCreateService: RegistrationsTeamCreateService,
    private readonly registrationFindService: RegistrationTeamFindService
  ) {}

  @Get('all')
  async getAllRegistrationsTeam(): Promise<RegistrationTeam[]> {
    return this.registrationFindService.allRegisters()
  }

  @Post('new/:id')
  async createRegistration(
    @Param('id', ParseUUIDPipe) championshipId: string,
    @Body() createTeamDto: CreateTeamDto
  ): Promise<RegistrationTeam>
  {
    return await this.registrationCreateService.create(championshipId, createTeamDto)
  }
}
