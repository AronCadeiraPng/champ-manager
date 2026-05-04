import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MatchPairService } from "src/matches/use-cases/pair-matches/pair-matches.service";
import { ParticipantFindService } from "src/participant/use-cases/find-participants/find-participants.service";
import { CreatePhaseDto } from "src/phases/dtos/create-phase.dto";
import { Phase } from "src/phases/entity/phase.entity";
import { Repository } from "typeorm";

@Injectable()
export class BuildGroupPhaseService {
    constructor(
        @InjectRepository(Phase) private readonly phaseRepository: Repository<Phase>,
        private readonly participantFindService: ParticipantFindService,
        private readonly matchPairService: MatchPairService
    ){}

    async execute(createPhaseDto: CreatePhaseDto) {
        const phase = await this.phaseRepository.save(createPhaseDto);

        const participants = await this.participantFindService.findParticipantsByChampionship(createPhaseDto.championshipId);

        await this.matchPairService.execute(phase.id, participants);

        return phase;
    }
}