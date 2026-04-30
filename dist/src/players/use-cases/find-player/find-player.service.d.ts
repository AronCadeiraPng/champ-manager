import { Player } from "src/players/models/entity/player.entity";
import { Repository } from "typeorm";
export declare class PlayerFindService {
    private readonly playerRepository;
    constructor(playerRepository: Repository<Player>);
    byId(id: string): Promise<Player>;
    All(): Promise<Player[]>;
}
