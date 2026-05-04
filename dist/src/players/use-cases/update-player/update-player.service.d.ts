import { Player } from 'src/players/models/entity/player.entity';
import { Repository } from 'typeorm';
import { PlayerFindService } from '../find-player/find-player.service';
import { UpdatePlayerDto } from 'src/players/models/dtos/update-player.dto';
export declare class PlayerUpdateService {
    private readonly playerRepository;
    private readonly playerFindService;
    constructor(playerRepository: Repository<Player>, playerFindService: PlayerFindService);
    execute(playerId: string, playerDto: UpdatePlayerDto): Promise<Player>;
}
