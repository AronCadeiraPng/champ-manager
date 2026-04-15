import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ParticipantFindService } from '../use-cases/find-participants/find-participants.service';
import { Participant } from '../models/entity/participant.entity';

@Controller('participants')
export class ParticipantController {
  constructor(
    private readonly participantFindService: ParticipantFindService
  ) {}

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
