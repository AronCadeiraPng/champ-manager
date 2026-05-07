import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { Phase } from '../entity/phase.entity';
import { CreatePhaseDto } from '../dtos/create-phase.dto';
import { PhaseCreateService } from '../use-cases/create-phase/create-phase.service';
import { PhaseFindService } from '../use-cases/find-phase/find-phase.service';
import { PhaseBuildOctaveService } from '../use-cases/build-octave-phase/build-octave-phase.service';

@Controller('phases')
export class PhasesController {
  constructor(
    private readonly phaseCreateService: PhaseCreateService,
    private readonly phaseFindService: PhaseFindService,
    private readonly phaseBuildOctaveService: PhaseBuildOctaveService
  ) {}

  @Post(':championship/octave')
  async startOctave(
    @Param('championship', ParseUUIDPipe) championshipId: string
  )
  {
    return await this.phaseBuildOctaveService.execute(championshipId);
  }

  @Post('create')
  async createPhase(
    @Body() createPhaseDto: CreatePhaseDto
  ): Promise<Phase> 
  {
    return await this.phaseCreateService.execute(createPhaseDto);
  }

  @Get(':id')
  async findByChampionship(
    @Param('id', ParseUUIDPipe) championshipId: string 
  )
  {
    return await this.phaseFindService.ByChampionship(championshipId);
  }
}
