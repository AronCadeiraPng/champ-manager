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
import { MatchCreateService } from '../use-cases/create-match/create-match.service';
import { Match } from '../models/entity/match.entity';
import { CreateMatchDto } from '../models/dtos/create-match.dto';
import { MatchFindService } from '../use-cases/find-match/find-match.service';
import { ChampionshipStatusEnum } from '../../_common/enums/championship-status.enum';
import { MatchSetWinnerService } from '../use-cases/set-winner/set-winner.service';
import { MatchGetWinnersService } from '../use-cases/get-winners/get-winners.service';
import { PhaseEnum } from '../../_common/enums/phase-name.enum';

@Controller('matches')
export class MatchesController {
  constructor(
    private readonly matchCreateService: MatchCreateService,
    private readonly matchFindService: MatchFindService,
    private readonly matchSetWinnerService: MatchSetWinnerService,
    private readonly matchGetWinnersService: MatchGetWinnersService,
  ) {}

  @Get('all')
  async findAllMatches(): Promise<Match[]> {
    return await this.matchFindService.All();
  }

  @Get(':id/:phase/participants/all')
  async findAllWinersFromPhase(
    @Param('id', ParseUUIDPipe) championshipId: string,
    phase: ChampionshipStatusEnum,
  ) {
    return await this.matchGetWinnersService.execute(championshipId, phase);
  }

  @Post(':id/set-point')
  async setWinner(@Param('id', ParseUUIDPipe) playerId: string) {
    return await this.matchSetWinnerService.execute(playerId);
  }

  @Get('participant/:id')
  async findMatchByParticipant(
    @Param('id', ParseUUIDPipe) participantId: string,
  ) {
    return await this.matchFindService.ByParticipant(participantId);
  }

  @Post(':id')
  async createMatch(
    @Param('id', ParseUUIDPipe) phaseId: string,
    @Body() createMatchDto: CreateMatchDto,
  ) {
    return this.matchCreateService.execute(createMatchDto);
  }

  @Get(':id/:status')
  async findByChampionshipStatus(
    @Param('id', ParseUUIDPipe) championshipId: string,
    status: PhaseEnum,
  ) {
    return this.matchFindService.ByPhase(championshipId, status);
  }
}
