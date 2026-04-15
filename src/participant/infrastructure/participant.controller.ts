import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ParticipantFindService } from '../use-cases/find-participants/find-participants.service';
import { Participant } from '../models/entity/participant.entity';
import { ParticipantCreateService } from '../use-cases/create-participant/create-participant.service';
import { CreateParticipantDto } from '../models/dtos/create-participant.dto';

@Controller('participants')
export class ParticipantController {
  constructor(
    private readonly participantFindService: ParticipantFindService,
    private readonly participantCreateService: ParticipantCreateService
  ) {}

  @Post(':id/create')
  async createParticipant(
    @Param('id', ParseUUIDPipe) championshipId: string,
    @Body() createParticipantDto: CreateParticipantDto
  )
  {
    return this.participantCreateService.createParticipant(championshipId, createParticipantDto)
  }

  
  @Get('all')
  async findAllParticipants(): Promise<Participant[]>
  {
    return this.participantFindService.findAllParticipants()
  }

  @Get('championship/:id')
  async findParticipantsByChampionship(
    @Param('id', ParseUUIDPipe) championshipId: string
  )
  {
    return this.participantFindService.findParticipantsByChampionship(championshipId)
  }
}
