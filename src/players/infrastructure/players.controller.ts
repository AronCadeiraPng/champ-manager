import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { Player } from '../models/entity/player.entity';
import { PlayerFindService } from '../use-cases/find-player/find-player.service';
import { PlayerUpdateService } from '../use-cases/update-player/update-player.service';
import { UpdatePlayerDto } from '../models/dtos/update-player.dto';

@Controller('players')
export class PlayersController {
  constructor(
    private readonly playerFindService: PlayerFindService,
    private readonly playerUpdateService: PlayerUpdateService
  ){}

  @Get('all')
  async findAllPlayers(): Promise<Player[]> {
    return await this.playerFindService.All();
  }

  @Patch(':id')
  async update(
  @Param('id', ParseUUIDPipe) id: string,
  @Body() updatePlayerDto: UpdatePlayerDto
  )
  {
    return await this.playerUpdateService.execute(id, updatePlayerDto);
  }
}
