import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChampionshipsService } from './championships.service';
import { CreateChampionshipDto } from './dto/create-championship.dto';

@Controller('championships')
export class ChampionshipsController {
  constructor(private readonly championshipsService: ChampionshipsService) {}

  @Post('create')
  async createChampionship(@Body() createChampionshipDto: CreateChampionshipDto) {
    return await this.championshipsService.createChampionship(createChampionshipDto)
  }
}
