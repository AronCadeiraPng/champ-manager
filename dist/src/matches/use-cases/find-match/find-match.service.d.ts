import { PhaseEnum } from "src/common/enums/phase-name.enum";
import { Match } from "src/matches/models/entity/match.entity";
import { Repository } from "typeorm";
export declare class MatchFindService {
    private readonly matchRepository;
    constructor(matchRepository: Repository<Match>);
    ById(id: string): Promise<Match>;
    ByChampionship(championshipId: string): Promise<Match>;
    ByParticipant(participantId: string): Promise<Match[]>;
    ByPhase(championshipId: string, phaseStatus: PhaseEnum): Promise<Match[]>;
    All(): Promise<Match[]>;
}
