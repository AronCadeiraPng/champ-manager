import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { NotFoundException } from "src/common/exceptions";
import { Player } from "src/players/models/entity/player.entity";
import { Repository } from "typeorm";

@Injectable()
export class PlayerFindService {
    constructor (
        @InjectRepository(Player) private readonly playerRepository: Repository<Player>
    ) {}

    async byId(id: string): Promise<Player> {
        const player = await this.playerRepository.findOne({
            where: {
                id: id
            }
        })

        if(!player) throw new NotFoundException('Jogador', id);

        return player;
    }

    async all(): Promise<Player[]> {
        return await this.playerRepository.find();
    }

    // byPhase(phaseId: string): Promise<Player[]> {}
}