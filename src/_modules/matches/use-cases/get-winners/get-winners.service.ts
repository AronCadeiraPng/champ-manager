import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Match } from '../../models/entity/match.entity';
import { Repository } from 'typeorm';
import { MatchFindService } from '../find-match/find-match.service';
import { PhaseEnum } from '../../../../_common/enums/phase-name.enum';
import { Player } from '../../../players/models/entity/player.entity';

@Injectable()
export class MatchGetWinnersService {
  constructor(
    @InjectRepository(Match)
    private readonly matchRepository: Repository<Match>,
    private readonly matchFindService: MatchFindService,
  ) {}

  async execute(
    championshipId: string,
    phaseStatus: PhaseEnum | any,
  ): Promise<Player[]> {
    const matches = await this.matchFindService.ByPhase(
      championshipId,
      phaseStatus,
    );

    const winners = await Promise.all(
      matches.map(async (match) => {
        // if(match.status != MatchStatusEnum.FINISHED) throw new BadRequestException('Impossível continuar, ainda há partidas em andamento', 400);

        const winnerArray = await this.matchRepository.query(
          /*sql*/ `
                    SELECT 
                        p.id as "id",
                        p.points
                    FROM 
                        players p
                    WHERE
                        p.match_id = $1
                    ORDER BY
                        p.points
                    DESC LIMIT 1`,
          [match.id],
        );

        const winner = winnerArray.find((winner) => winner.id == winner.id);

        return winner;
      }),
    );

    return winners;
  }
}
