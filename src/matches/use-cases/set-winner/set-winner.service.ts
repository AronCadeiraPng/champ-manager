import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Match } from '../../models/entity/match.entity';
import { Player } from '../../../players/models/entity/player.entity';
import { PlayerUpdateService } from '../../../players/use-cases/update-player/update-player.service';
import { MatchFindService } from '../find-match/find-match.service';
import { MatchUpdateService } from '../update-match/update-match.service';
import { UpdateMatchDto } from '../../models/dtos/update-match.dto';

@Injectable()
export class MatchSetWinnerService {
  constructor(
    @InjectRepository(Match)
    private readonly playerUpdateService: PlayerUpdateService,
    private readonly matchFindService: MatchFindService,
    private readonly matchUpdateService: MatchUpdateService
  ) {}

  async execute(matchId: string): Promise<Match> {
    const match = await this.matchFindService.ById(matchId);

    const players: Player[] = match.players;

    const winner = players.reduce((max, atual ) => {
      return atual.points > max.points ? atual : max
    })

    const updateMatchDto: UpdateMatchDto = {
      winnerId: winner.id
    }

    return await this.matchUpdateService.execute(match.id, updateMatchDto);
  }
}
