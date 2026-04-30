import { Module } from '@nestjs/common';
import { PlayersController } from './players.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from '../models/entity/player.entity';
import { PlayerCreateService } from '../use-cases/create-player/create-player.service';
import { PlayerFindService } from '../use-cases/find-player/find-player.service';

@Module({
  imports: [TypeOrmModule.forFeature([Player])],
  controllers: [PlayersController],
  providers: [
    PlayerCreateService,
    PlayerFindService
  ],
  exports: [
    PlayerCreateService,
    PlayerFindService 
  ]
})
export class PlayersModule {}
