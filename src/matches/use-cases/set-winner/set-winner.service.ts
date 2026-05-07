import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Match } from 'src/matches/models/entity/match.entity'
import { UpdatePlayerDto } from 'src/players/models/dtos/update-player.dto'
import { Player } from 'src/players/models/entity/player.entity'
import { PlayerFindService } from 'src/players/use-cases/find-player/find-player.service'
import { PlayerUpdateService } from 'src/players/use-cases/update-player/update-player.service'
import { Repository } from 'typeorm'

@Injectable()
export class MatchSetWinnerService {
    constructor (
    @InjectRepository(Match) private readonly matchRepository: Repository<Match>,
    private readonly playerFindService: PlayerFindService,
    private readonly playerUpdateService: PlayerUpdateService
) { }

    async execute(playerId: string): Promise<Player> {
        const playerUpdateDto: UpdatePlayerDto = {
            points: 2
        }

        return await this.playerUpdateService.execute(playerId, playerUpdateDto);
    }
}