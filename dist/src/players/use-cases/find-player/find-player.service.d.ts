import { Player } from "src/players/models/entity/player.entity";
import { Repository } from "typeorm";
export declare class PlayerFindService {
    private readonly playersRepository;
    constructor(playersRepository: Repository<Player>);
    findPlayerById(id: string): Promise<Player>;
    findAllPlayers(): Promise<Player[]>;
}
