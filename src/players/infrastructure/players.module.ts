import { Module } from '@nestjs/common';
import { PlayersController } from './players.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from '../models/entity/player.entity';
import { PlayerCreateService } from '../use-cases/create-player/create-player.service';
import { PlayerFindService } from '../use-cases/find-player/find-player.service';
import { PlayerUpdateService } from '../use-cases/update-player/update-player.service';

@Module({
  imports: [TypeOrmModule.forFeature([Player])],
  controllers: [PlayersController],
  providers: [
    PlayerCreateService,
    PlayerFindService,
    PlayerUpdateService,
  ],
  exports: [PlayerCreateService, PlayerFindService, PlayerUpdateService],
})
export class PlayersModule {}
