import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Phase } from '../entity/phase.entity';
import { CreatePhaseDto } from '../dtos/create-phase.dto';
import { PhaseCreateService } from '../use-cases/create-phase/create-phase.service';

@Controller('phases')
export class PhasesController {
  constructor(
    private readonly phaseCreateService: PhaseCreateService
  ) {}

  @Post('create')
  async createPhase(
    @Body() createPhaseDto: CreatePhaseDto
  ): Promise<Phase> 
  {
    return await this.phaseCreateService.execute(createPhaseDto);
  }
}
