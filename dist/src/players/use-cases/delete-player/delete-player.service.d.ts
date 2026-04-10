import { Player } from "src/players/models/entity/player.entity";
import { Repository } from "typeorm";
import { PlayerFindService } from "../find-player/find-player.service";
export declare class PlayerDeleteService {
    private readonly playersRepository;
    private readonly playerFindService;
    constructor(playersRepository: Repository<Player>, playerFindService: PlayerFindService);
    delete(playerId: string): Promise<Player>;
}
