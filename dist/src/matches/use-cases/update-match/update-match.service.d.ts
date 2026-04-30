import { Match } from "src/matches/models/entity/match.entity";
import { Repository } from "typeorm";
import { MatchFindService } from "../find-match/find-match.service";
import { Player } from "src/players/models/entity/player.entity";
export declare class MatchUpdateService {
    private readonly matchRepository;
    private readonly matchFindService;
    constructor(matchRepository: Repository<Match>, matchFindService: MatchFindService);
    execute(matchId: string, players: Player[]): Promise<Match>;
}
