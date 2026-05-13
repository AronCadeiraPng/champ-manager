import { Injectable } from '@nestjs/common';
import { CreatePhaseDto } from '../../../phases/dtos/create-phase.dto';
import { PhaseBuildOctaveService } from '../../../phases/use-cases/build-octave-phase/build-octave-phase.service';
import { ChampionshipFindService } from '../find-championship/find-championship.service';

@Injectable()
export class ChampionshipOctavePhaseService {
  constructor(
    private readonly championshipFindService: ChampionshipFindService,
    private readonly buildOctavePhase: PhaseBuildOctaveService,
  ) {}

  async execute(createPhaseDto: CreatePhaseDto) {
    const championship =
      await this.championshipFindService.findChampionshipById(
        createPhaseDto.championshipId,
      );

    // await this.buildOctavePhase.execute(createPhaseDto);
  }
}
