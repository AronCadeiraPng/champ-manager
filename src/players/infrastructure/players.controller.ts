import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { CreatePlayerDto } from '../models/dtos/create-player.dto';
import { PlayerCreateService } from '../use-cases/create-player/create-player.service';
import { Player } from '../models/entity/player.entity';
import { PlayerFindService } from '../use-cases/find-player/find-player.service';
import { PlayerDeleteService } from '../use-cases/delete-player/delete-player.service';

@Controller('players')
export class PlayersController {
  constructor(
    private readonly playerCreateService: PlayerCreateService,
    private readonly playerFindService: PlayerFindService,
    private readonly playerDeleteService: PlayerDeleteService
  ) {}

  @Post('create')
  async create(@Body() createPlayerDto: CreatePlayerDto): Promise<Player>
  {
    return this.playerCreateService.create(createPlayerDto);
  }

  @Get('all')
  async getAll(): Promise<Player[]> 
  {
    return this.playerFindService.findAllPlayers();
  }

  @Delete(':id')
  async deletePlayer(
    @Param('id', ParseUUIDPipe) id: string
  ): Promise<Player>
  {
    return this.playerDeleteService.delete(id);
  }
}
