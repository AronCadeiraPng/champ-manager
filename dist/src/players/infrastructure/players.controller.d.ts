import { CreatePlayerDto } from '../models/dtos/create-player.dto';
import { PlayerCreateService } from '../use-cases/create-player/create-player.service';
import { Player } from '../models/entity/player.entity';
import { PlayerFindService } from '../use-cases/find-player/find-player.service';
import { PlayerDeleteService } from '../use-cases/delete-player/delete-player.service';
export declare class PlayersController {
    private readonly playerCreateService;
    private readonly playerFindService;
    private readonly playerDeleteService;
    constructor(playerCreateService: PlayerCreateService, playerFindService: PlayerFindService, playerDeleteService: PlayerDeleteService);
    create(createPlayerDto: CreatePlayerDto): Promise<Player>;
    getAll(): Promise<Player[]>;
    deletePlayer(id: string): Promise<Player>;
}
