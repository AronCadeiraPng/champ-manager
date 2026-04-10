import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { NotFoundException } from "src/common/exceptions";
import { Player } from "src/players/models/entity/player.entity";
import { Repository } from "typeorm";

@Injectable()
export class PlayerFindService {
    constructor(@InjectRepository(Player) private readonly playersRepository: Repository<Player>) {}

    async findPlayerById(id: string): Promise<Player> {
        const player = await this.playersRepository.findOne({
            where: {
                id: id
            }
        })

        if(!player) throw new NotFoundException('Player', id);

        return player;
    }

    async findAllPlayers(): Promise<Player[]> {
        const players = await this.playersRepository.find({select: 
            ["championship", "championshipId", "id", "points", "registration", "registrationId"]
        })

        return players;
    }
}