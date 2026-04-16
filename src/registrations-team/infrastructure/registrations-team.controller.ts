import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { RegistrationsTeamCreateService } from '../use-cases/create-registration/create-registration-team.service';
import { RegistrationTeam } from '../models/entity/registration-team.entity';
import { CreateTeamDto } from 'src/teams/models/dtos/create-team.dto';
import { RegistrationTeamFindService } from '../use-cases/find-registration/find-registration.service';
import { RegistrationTeamDeleteService } from '../use-cases/delete-registration/delete-registration.service';

@Controller('registrations/team')
export class RegistrationsTeamController {
  constructor(
    private readonly registrationCreateService: RegistrationsTeamCreateService,
    private readonly registrationFindService: RegistrationTeamFindService,
    private readonly registrationDeleteService: RegistrationTeamDeleteService
  ) {}

  @Get('all')
  async getAllRegistrationsTeam(): Promise<RegistrationTeam[]>
  {
    return this.registrationFindService.allRegisters()
  }

  @Delete(':id')
  async deleteRegistration(
    @Param('id', ParseUUIDPipe) id: string
  ): Promise<RegistrationTeam>
  {
    return this.registrationDeleteService.execute(id);
  }

  @Post('new/:id')
  async createRegistration(
    @Param('id', ParseUUIDPipe) championshipId: string,
    @Body() createTeamDto: CreateTeamDto
  ): Promise<RegistrationTeam>
  {
    return await this.registrationCreateService.execute(championshipId, createTeamDto)
  }
}
