import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Player } from 'src/players/models/entity/player.entity'
import { Repository } from 'typeorm'
import { PlayerFindService } from '../find-player/find-player.service'
import { UpdatePlayerDto } from 'src/players/models/dtos/update-player.dto'

@Injectable()
export class PlayerUpdateService {
constructor (
    @InjectRepository(Player) private readonly playerRepository: Repository<Player>,
    private readonly playerFindService: PlayerFindService
) { }

    async execute(playerId: string, playerDto: UpdatePlayerDto) {
        const player = await this.playerFindService.byId(playerId);

        Object.assign(player, playerDto);

        return await this.playerRepository.save(player);
    }
}