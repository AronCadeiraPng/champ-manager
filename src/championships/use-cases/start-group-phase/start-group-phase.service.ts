import { Injectable } from '@nestjs/common'
import { BuildGroupPhaseService } from 'src/phases/use-cases/build-group-phase/build-group-phase.service'
import { ChampionshipFindService } from '../find-championship/find-championship.service'
import { CreatePhaseDto } from 'src/phases/dtos/create-phase.dto'

@Injectable()
export class StartGroupPhaseService {
constructor (
    private readonly buildGroupPhaseService: BuildGroupPhaseService,
    private readonly championshipFindService: ChampionshipFindService
) { }

    async execute(createPhaseDto: CreatePhaseDto) {
        await this.championshipFindService.findChampionshipById(createPhaseDto.championshipId);

        return await this.buildGroupPhaseService.execute(createPhaseDto);
    }
}