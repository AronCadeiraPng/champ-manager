import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ChampionshipFindService } from "src/championships/use-cases/find-championship/find-championship.service";
import { ParticipantFindService } from "src/participant/use-cases/find-participants/find-participants.service";
import { Phase } from "src/phases/entity/phase.entity";
import { CreatePhaseDto } from "src/phases/dtos/create-phase.dto";
import { BuildGroupPhaseService } from "../build-group-phase/build-group-phase.service";

@Injectable()
export class PhaseCreateService {
    constructor(
        @InjectRepository(Phase) private readonly phaseRepository: Repository<Phase>,
        private readonly championshipFindService: ChampionshipFindService,
        private readonly participantFindService: ParticipantFindService,
        private readonly groupFaseBuildService: BuildGroupPhaseService
    ){ }

    async execute(createPhaseDto: CreatePhaseDto): Promise<Phase> {
        await this.championshipFindService.findChampionshipById(createPhaseDto.championshipId);
        await this.participantFindService.findParticipantsByChampionship(createPhaseDto.championshipId);

        return await this.phaseRepository.save(createPhaseDto);
    }
}