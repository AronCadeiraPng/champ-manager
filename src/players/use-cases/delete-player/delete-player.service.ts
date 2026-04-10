import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Player } from "src/players/models/entity/player.entity";
import { Repository } from "typeorm";
import { PlayerFindService } from "../find-player/find-player.service";

@Injectable()
export class PlayerDeleteService {
    constructor(
        @InjectRepository(Player) private readonly playersRepository: Repository<Player>,
        private readonly playerFindService: PlayerFindService
    ) {}

    async delete(playerId: string) {
        const player = await this.playerFindService.findPlayerById(playerId);
    
        return this.playersRepository.remove(player)
    }
}