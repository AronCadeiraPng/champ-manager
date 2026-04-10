import { CreatePlayerDto } from "src/players/models/dtos/create-player.dto";
import { Player } from "src/players/models/entity/player.entity";
import { Repository } from "typeorm";
export declare class PlayerCreateService {
    private readonly playersRepository;
    constructor(playersRepository: Repository<Player>);
    create(createPlayerDto: CreatePlayerDto): Promise<Player>;
}
