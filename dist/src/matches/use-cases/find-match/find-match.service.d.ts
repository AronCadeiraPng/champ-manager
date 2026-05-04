import { Match } from "src/matches/models/entity/match.entity";
import { Repository } from "typeorm";
export declare class MatchFindService {
    private readonly matchRepository;
    constructor(matchRepository: Repository<Match>);
    ById(id: string): Promise<Match>;
    ByChampionship(championshipId: string): Promise<Match>;
    All(): Promise<Match[]>;
}
