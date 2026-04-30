import { Module } from '@nestjs/common';
import { MatchesController } from './matches.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Match } from '../models/entity/match.entity';
import { MatchCreateService } from '../use-cases/create-match/create-match.service';
import { MatchShuffleService } from '../use-cases/shuffle-match/shuffle-match.service';
import { MatchPairService } from '../use-cases/pair-matches/pair-matches.service';
import { Player } from 'src/players/models/entity/player.entity';
import { PlayerCreateService } from 'src/players/use-cases/create-player/create-player.service';
import { MatchFindService } from '../use-cases/find-match/find-match.service';
import { MatchUpdateService } from '../use-cases/update-match/update-match.service';

@Module({
  imports: [TypeOrmModule.forFeature([Match, Player])],
  controllers: [MatchesController],
  providers: [
    MatchCreateService,
    MatchShuffleService,
    MatchPairService,
    PlayerCreateService,
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
