import { Injectable } from '@nestjs/common'
import { BuildGroupPhaseService } from 'src/phases/use-cases/build-group-phase/build-group-phase.service'
import { ChampionshipFindService } from '../find-championship/find-championship.service'
import { CreatePhaseDto } from 'src/phases/dtos/create-phase.dto'
import { ChampionshipStatusEnum } from 'src/common/enums/championship-status.enum';
import { BadRequestException } from 'src/common/exceptions/bad-request.exception';

@Injectable()
export class StartGroupPhaseService {
constructor (
    private readonly buildGroupPhaseService: BuildGroupPhaseService,
    private readonly championshipFindService: ChampionshipFindService
) { }

    async execute(championshipId: string) {
        const championship = await this.championshipFindService.findChampionshipById(championshipId);

        if(championship.status == ChampionshipStatusEnum.GROUP_PHASE) throw new BadRequestException('Este torneio já está em fase de grupo', 400);

        const phaseDto: CreatePhaseDto = {
            championshipId: championshipId
        }

        return await this.buildGroupPhaseService.execute(phaseDto);
    }
}