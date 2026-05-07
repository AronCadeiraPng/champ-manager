import { Injectable } from '@nestjs/common'
import { CreatePhaseDto } from 'src/phases/dtos/create-phase.dto'
import { ChampionshipFindService } from '../find-championship/find-championship.service'
import { BadRequestException } from 'src/common/exceptions/bad-request.exception'
import { PhaseBuildOctaveService } from 'src/phases/use-cases/build-octave-phase/build-octave-phase.service'
import { ChampionshipStatusEnum } from 'src/common/enums/championship-status.enum'

@Injectable()
export class ChampionshipOctavePhaseService {
constructor (
    private readonly championshipFindService: ChampionshipFindService,
    private readonly buildOctavePhase: PhaseBuildOctaveService
) { }

    async execute(createPhaseDto: CreatePhaseDto) {
        const championship = await this.championshipFindService.findChampionshipById(createPhaseDto.championshipId);

        // await this.buildOctavePhase.execute(createPhaseDto);
    }
}