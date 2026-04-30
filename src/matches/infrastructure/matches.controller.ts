import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { MatchCreateService } from '../use-cases/create-match/create-match.service';
import { Match } from '../models/entity/match.entity';
import { CreateMatchDto } from '../models/dtos/create-match.dto';
import { MatchFindService } from '../use-cases/find-match/find-match.service';

@Controller('matches')
export class MatchesController {
  constructor(
    private readonly matchCreateService: MatchCreateService,
    private readonly matchFindService: MatchFindService
  ) {}

  @Post(':id')
  async createMatch(
    @Param('id', ParseUUIDPipe) phaseId: string,
    @Body() createMatchDto: CreateMatchDto
  )
  {
    return this.matchCreateService.execute(createMatchDto)
  }

  @Get('all')
  async findAllMatches(    
  ): Promise<Match[]>
  {
    return await this.matchFindService.All();
  }

}
