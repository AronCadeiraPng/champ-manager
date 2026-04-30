import { MatchPairService } from "src/matches/use-cases/pair-matches/pair-matches.service";
import { ParticipantFindService } from "src/participant/use-cases/find-participants/find-participants.service";
import { CreatePhaseDto } from "src/phases/dtos/create-phase.dto";
import { Phase } from "src/phases/entity/phase.entity";
import { Repository } from "typeorm";
export declare class BuildGroupPhaseService {
    private readonly phaseRepository;
    private readonly participantFindService;
    private readonly pairMatchService;
    constructor(phaseRepository: Repository<Phase>, participantFindService: ParticipantFindService, pairMatchService: MatchPairService);
    execute(createPhaseDto: CreatePhaseDto): Promise<CreatePhaseDto & Phase>;
}
