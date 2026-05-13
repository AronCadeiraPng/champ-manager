import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Player } from '../models/entity/player.entity';
import { PlayerFindService } from '../use-cases/find-player/find-player.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly playerFindService: PlayerFindService) {}

  @Get('all')
  async findAllPlayers(): Promise<Player[]> {
    return await this.playerFindService.All();
  }
}
