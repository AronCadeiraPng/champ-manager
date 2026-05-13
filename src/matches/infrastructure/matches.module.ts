import { Module } from '@nestjs/common';
import { MatchesController } from './matches.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Match } from '../models/entity/match.entity';
import { MatchCreateService } from '../use-cases/create-match/create-match.service';
import { MatchShuffleService } from '../use-cases/shuffle-match/shuffle-match.service';
import { Player } from '../../players/models/entity/player.entity';
import { PlayerCreateService } from '../../players/use-cases/create-player/create-player.service';
import { MatchFindService } from '../use-cases/find-match/find-match.service';
import { MatchUpdateService } from '../use-cases/update-match/update-match.service';
import { PlayerUpdateService } from '../../players/use-cases/update-player/update-player.service';
import { PlayerFindService } from '../../players/use-cases/find-player/find-player.service';
import { MatchPairService } from '../use-cases/pair-matches/pair-matches.service';
import { Championship } from '../../championships/models/entity/championship.entity';
import { ChampionshipFindService } from '../../championships/use-cases/find-championship/find-championship.service';
import { MatchSetWinnerService } from '../use-cases/set-winner/set-winner.service';
import { MatchGetWinnersService } from '../use-cases/get-winners/get-winners.service';

@Module({
  imports: [TypeOrmModule.forFeature([Championship, Match, Player])],
  controllers: [MatchesController],
  providers: [
    MatchCreateService,
    MatchShuffleService,
    MatchPairService,
    PlayerCreateService,
    PlayerUpdateService,
    PlayerFindService,
    MatchFindService,
    MatchFindService,
    MatchUpdateService,
    MatchSetWinnerService,
    MatchGetWinnersService,
    ChampionshipFindService,
  ],
  exports: [
    MatchCreateService,
    MatchShuffleService,
    MatchPairService,
    MatchFindService,
    MatchUpdateService,
    MatchSetWinnerService,
    MatchGetWinnersService,
  ],
})
export class MatchesModule {}
