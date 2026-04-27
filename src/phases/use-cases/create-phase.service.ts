import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Phase } from "../entity/phase.entity";
import { Repository } from "typeorm";
import { CreatePhaseDto } from "../dtos/create-phase.dto";
import { PhaseName } from "src/common/enums/phase-name.enum";
import { ChampionshipFindService } from "src/championships/use-cases/find-championship/find-championship.service";
import { ParticipantFindService } from "src/participant/use-cases/find-participants/find-participants.service";

@Injectable()
export class PhaseCreateService {
    constructor(
        @InjectRepository(Phase) private readonly phaseRepository: Repository<Phase>,
        private readonly championshipFindService: ChampionshipFindService,
        private readonly participantFindService: ParticipantFindService
    ){ }

    async execute(createPhaseDto: CreatePhaseDto): Promise<Phase> {
        const championship = await this.championshipFindService.findChampionshipById(createPhaseDto.championshipId)
        const participants = await this.participantFindService.findParticipantsByChampionship(createPhaseDto.championshipId)

        if(createPhaseDto.name == PhaseName.GROUP_FASE) {
            
        }
        return await this.phaseRepository.save(createPhaseDto);
    }
}