import { Module } from '@nestjs/common';
import { MatchesController } from './matches.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Match } from '../models/entity/match.entity';
import { MatchCreateService } from '../use-cases/create-match/create-match.service';
import { MatchShuffleService } from '../use-cases/shuffle-match/shuffle-match.service';
import { MatchPairService } from '../use-cases/pair-matches/pair-matches.service';

@Module({
  imports: [TypeOrmModule.forFeature([Match])],
  controllers: [MatchesController],
  providers: [
    MatchCreateService,
    MatchShuffleService,
    MatchPairService
  ],
  exports: [
    MatchCreateService,
    MatchShuffleService,
    MatchPairService
  ]
})
export class MatchesModule {}
