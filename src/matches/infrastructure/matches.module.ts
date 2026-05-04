import { Module } from '@nestjs/common';
import { MatchesController } from './matches.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Match } from '../models/entity/match.entity';
import { MatchCreateService } from '../use-cases/create-match/create-match.service';
import { MatchShuffleService } from '../use-cases/shuffle-match/shuffle-match.service';
import { Player } from 'src/players/models/entity/player.entity';
import { PlayerCreateService } from 'src/players/use-cases/create-player/create-player.service';
import { MatchFindService } from '../use-cases/find-match/find-match.service';
import { MatchUpdateService } from '../use-cases/update-match/update-match.service';
import { PlayerUpdateService } from 'src/players/use-cases/update-player/update-player.service';
import { PlayerFindService } from 'src/players/use-cases/find-player/find-player.service';
import { MatchPairService } from '../use-cases/pair-matches/pair-matches.service';

@Module({
  imports: [TypeOrmModule.forFeature([Match, Player])],
  controllers: [MatchesController],
  providers: [
    MatchCreateService,
    MatchShuffleService,
    MatchPairService,
    PlayerCreateService,
    PlayerUpdateService,
    PlayerFindService,
    MatchFindService,
    MatchUpdateService
  ],
  exports: [
    MatchCreateService,
    MatchShuffleService,
    MatchPairService,
    MatchFindService,
    MatchUpdateService
  ]
})
export class MatchesModule {}
