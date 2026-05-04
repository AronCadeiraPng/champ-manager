import { Injectable } from '@nestjs/common'
import { CreatePhaseDto } from 'src/phases/dtos/create-phase.dto'
import { Phase } from 'src/phases/entity/phase.entity'
import { ChampionshipFindService } from '../find-championship/find-championship.service'
import { StatusEnum } from 'src/common/enums/championship-status.enum'
import { BadRequestException } from 'src/common/exceptions/bad-request.exception'
import { PhaseBuildOctaveService } from 'src/phases/use-cases/build-octave-phase/build-octave-phase.service'

@Injectable()
export class ChampionshipOctavePhaseService {
constructor (
    private readonly championshipFindService: ChampionshipFindService,
    private readonly buildOctavePhase: PhaseBuildOctaveService
) { }

    async execute(createPhaseDto: CreatePhaseDto): Promise<Phase> {
        const championship = await this.championshipFindService.findChampionshipById(createPhaseDto.championshipId);

        if(championship.status == StatusEnum.OCTAVE_PHASE) throw new BadRequestException('Este torneio já está em fase de grupo', 400);

        await this.buildOctavePhase.execute(createPhaseDto);
    }

}