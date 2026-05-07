import { Match } from 'src/matches/models/entity/match.entity';
import { Player } from 'src/players/models/entity/player.entity';
import { Repository } from 'typeorm';
import { MatchFindService } from '../find-match/find-match.service';
import { PhaseEnum } from 'src/common/enums/phase-name.enum';
export declare class MatchGetWinnersService {
    private readonly matchRepository;
    private readonly matchFindService;
    constructor(matchRepository: Repository<Match>, matchFindService: MatchFindService);
    execute(championshipId: string, phaseStatus: PhaseEnum | any): Promise<Player[]>;
}
