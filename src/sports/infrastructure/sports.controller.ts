import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { CreateSportDto } from '../models/dtos/create-sport.dto';
import { SportCreateService } from '../use-cases/create-sport/create-sport.service';
import { Sport } from '../models/entity/sport.entity';
import { SportFindService } from '../use-cases/find-sport/find-sport.service';
import { IsUUID } from 'class-validator';

@Controller('sports')
export class SportsController {
  constructor(
    private readonly sportCreateService: SportCreateService,
    private readonly sportFindService: SportFindService
  ) {}

  @Post('create')
  async create(
    @Body() createSportDto: CreateSportDto
  ): Promise<Sport>
  {
    return this.sportCreateService.create(createSportDto);
  }
  
  @Get('all')
  async getAll(): Promise<Sport[]> 
  {
    return this.sportFindService.findAllSport()
  }

  @Get(':id')
  async findById(
    @Param('id', ParseUUIDPipe) id: string
  )
  {
    return this.sportFindService.findSportById(id)
  }
}
