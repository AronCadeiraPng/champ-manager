import { Module } from '@nestjs/common';
import { PlayersController } from './players.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from '../models/entity/player.entity';
import { PlayerCreateService } from '../use-cases/create-player/create-player.service';
import { PlayerFindService } from '../use-cases/find-player/find-player.service';
import { PlayerUpdateService } from '../use-cases/update-player/update-player.service';
import { PhaseFindService } from 'src/phases/use-cases/find-phase/find-phase.service';
import { Phase } from 'src/phases/entity/phase.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Player, Phase])],
  controllers: [PlayersController],
  providers: [
    PlayerCreateService,
    PlayerFindService,
    PlayerUpdateService,
    PhaseFindService
  ],
  exports: [
    PlayerCreateService,
    PlayerFindService,
    PlayerUpdateService
  ]
})
export class PlayersModule {}
