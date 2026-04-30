import { Player } from '../models/entity/player.entity';
import { PlayerFindService } from '../use-cases/find-player/find-player.service';
export declare class PlayersController {
    private readonly playerFindService;
    constructor(playerFindService: PlayerFindService);
    findAllPlayers(): Promise<Player[]>;
}
