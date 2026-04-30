import { CreatePlayerDto } from "src/players/models/dtos/create-player.dto";
import { Player } from "src/players/models/entity/player.entity";
import { Repository } from "typeorm";
export declare class PlayerCreateService {
    private readonly playerRepository;
    constructor(playerRepository: Repository<Player>);
    execute(createPlayerDto: CreatePlayerDto): Promise<Player>;
}
