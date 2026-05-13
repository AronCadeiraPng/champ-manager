import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChampionshipFindService } from '../../../championships/use-cases/find-championship/find-championship.service';
import { MatchPairService } from '../../../matches/use-cases/pair-matches/pair-matches.service';
import { CreatePhaseDto } from '../../dtos/create-phase.dto';
import { Phase } from '../../entity/phase.entity';
import { Repository } from 'typeorm';
import { PlayerFindService } from '../../../players/use-cases/find-player/find-player.service';
import { ParticipantFindService } from '../../../participant/use-cases/find-participants/find-participants.service';
import { MatchGetWinnersService } from '../../../matches/use-cases/get-winners/get-winners.service';

@Injectable()
export class PhaseBuildOctaveService {
  constructor(
    @InjectRepository(Phase)
    private readonly phaseRepository: Repository<Phase>,
    private readonly matchGetWinnersService: MatchGetWinnersService,
    private readonly participantFindService: ParticipantFindService,
    private readonly matchPairService: MatchPairService,
    private readonly playerFindService: PlayerFindService,
  ) {}

  async execute(championshipId: string) {
    const phaseDto: CreatePhaseDto = {
      championshipId: championshipId,
    };

    const phase = await this.phaseRepository.save(phaseDto);

    const groupPhaseWinners = await this.matchGetWinnersService.execute(
      phase.championshipId,
      phaseDto.name,
    );

    const participants =
      await this.participantFindService.ByPlayer(groupPhaseWinners);

    console.log(
      '------------------------------------------------------------------------\n',
      participants,
    );

    // return this.matchPairService.execute(phase.id, participants);
  }
}
