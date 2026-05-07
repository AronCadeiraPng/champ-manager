import { Match } from 'src/matches/models/entity/match.entity';
import { Player } from 'src/players/models/entity/player.entity';
import { PlayerFindService } from 'src/players/use-cases/find-player/find-player.service';
import { PlayerUpdateService } from 'src/players/use-cases/update-player/update-player.service';
import { Repository } from 'typeorm';
export declare class MatchSetWinnerService {
    private readonly matchRepository;
    private readonly playerFindService;
    private readonly playerUpdateService;
    constructor(matchRepository: Repository<Match>, playerFindService: PlayerFindService, playerUpdateService: PlayerUpdateService);
    execute(playerId: string): Promise<Player>;
}
