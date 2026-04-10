import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from 'src/players/models/entity/player.entity';
import { PlayersModule } from 'src/players/infrastructure/players.module';
import { MatchController } from './match.controller';
import { MatchCreateService } from '../use-cases/create-match.service';
import { Match } from '../models/entity/match.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Match, Player]), PlayersModule],
  controllers: [MatchController],
  providers: [
    MatchCreateService
  ],
})
export class MatchModule {}
