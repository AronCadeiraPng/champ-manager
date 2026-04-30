import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePlayerDto } from "src/players/models/dtos/create-player.dto";
import { Player } from "src/players/models/entity/player.entity";
import { Repository } from "typeorm";

@Injectable()
export class PlayerCreateService {
    constructor (
        @InjectRepository(Player) private readonly playerRepository: Repository<Player>
    ) {}

    async execute(createPlayerDto: CreatePlayerDto): Promise<Player> {
        return this.playerRepository.save(createPlayerDto);
    }
}