import { BadRequestException, Injectable } from '@nestjs/common';
import { ChampionshipStatusEnum } from '../../../common/enums/championship-status.enum';
import { CreatePhaseDto } from '../../../phases/dtos/create-phase.dto';
import { BuildGroupPhaseService } from '../../../phases/use-cases/build-group-phase/build-group-phase.service';
import { ChampionshipFindService } from '../find-championship/find-championship.service';

@Injectable()
export class StartGroupPhaseService {
  constructor(
    private readonly buildGroupPhaseService: BuildGroupPhaseService,
    private readonly championshipFindService: ChampionshipFindService,
  ) {}

  async execute(championshipId: string) {
    const championship =
      await this.championshipFindService.findChampionshipById(championshipId);

    if (championship.status == ChampionshipStatusEnum.GROUP_PHASE)
      throw new BadRequestException('Este torneio já está em fase de grupo');

    const phaseDto: CreatePhaseDto = {
      championshipId: championshipId,
    };

    return await this.buildGroupPhaseService.execute(phaseDto);
  }
}
