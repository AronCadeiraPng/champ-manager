import { Module } from '@nestjs/common';
import { PlayersController } from './players.controller';
import { PlayerCreateService } from '../use-cases/create-player/create-player.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from '../models/entity/player.entity';
import { PlayerFindService } from '../use-cases/find-player/find-player.service';
import { PlayerDeleteService } from '../use-cases/delete-player/delete-player.service';

@Module({
  imports: [TypeOrmModule.forFeature([Player])],
  controllers: [PlayersController],
  providers: [
    PlayerCreateService,
    PlayerFindService,
    PlayerDeleteService
  ],
  exports: [
    PlayersModule,
    PlayerCreateService,
    PlayerFindService,
    PlayerDeleteService,
    TypeOrmModule
  ]
})
export class PlayersModule {}
