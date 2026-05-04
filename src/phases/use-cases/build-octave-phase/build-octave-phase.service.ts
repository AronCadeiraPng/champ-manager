import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ChampionshipFindService } from 'src/championships/use-cases/find-championship/find-championship.service';
import { CreatePhaseDto } from 'src/phases/dtos/create-phase.dto';
import { Phase } from 'src/phases/entity/phase.entity'
import { Repository } from 'typeorm'

@Injectable()
export class PhaseBuildOctaveService {
constructor (
    @InjectRepository(Phase) private readonly phaseRepository: Repository<Phase>,
    private readonly championshipFindService: ChampionshipFindService
) { }

    async execute(createPhaseDto: CreatePhaseDto) {
        const phase = await this.phaseRepository.save(createPhaseDto);

        const groupPhase = await this.championshipFindService.findChampionshipById(createPhaseDto.championshipId);

        const players = groupPhase.phases;
    } 
}