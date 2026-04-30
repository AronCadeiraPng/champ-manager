import { Repository } from "typeorm";
import { ChampionshipFindService } from "src/championships/use-cases/find-championship/find-championship.service";
import { ParticipantFindService } from "src/participant/use-cases/find-participants/find-participants.service";
import { Phase } from "src/phases/entity/phase.entity";
import { CreatePhaseDto } from "src/phases/dtos/create-phase.dto";
import { BuildGroupPhaseService } from "../build-group-phase/build-group-phase.service";
export declare class PhaseCreateService {
    private readonly phaseRepository;
    private readonly championshipFindService;
    private readonly participantFindService;
    private readonly groupFaseBuildService;
    constructor(phaseRepository: Repository<Phase>, championshipFindService: ChampionshipFindService, participantFindService: ParticipantFindService, groupFaseBuildService: BuildGroupPhaseService);
    execute(createPhaseDto: CreatePhaseDto): Promise<Phase>;
}
