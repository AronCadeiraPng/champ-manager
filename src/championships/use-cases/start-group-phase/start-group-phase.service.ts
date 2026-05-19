import { BadRequestException, Injectable } from '@nestjs/common';
import { ChampionshipStatusEnum } from '../../../_common/enums/championship-status.enum';
import { ChampionshipFindService } from '../find-championship/find-championship.service';
import { CreateGroupDto } from '../../../groups/models/dtos/create-group.dto';
import { GroupCreateService } from '../../../groups/use-cases/create-group/create-group.service';
import { MatchPairService } from '../../../matches/use-cases/pair-matches/pair-matches.service';
import { ParticipantFindService } from '../../../participant/use-cases/find-participants/find-participants.service';

@Injectable()
export class StartGroupPhaseService {
  constructor(
    private readonly championshipFindService: ChampionshipFindService,
    private readonly groupCreateService: GroupCreateService,
    private readonly matchPairService: MatchPairService,
    private readonly participantFindService: ParticipantFindService
  ) {}

  async execute(championshipId: string) {
    const championship = await this.championshipFindService.findChampionshipById(championshipId);

    if (championship.status == ChampionshipStatusEnum.GROUP_PHASE) throw new BadRequestException('Este torneio já está em fase de grupo');
    
    const groupDto: CreateGroupDto = {
      championshipId: championshipId
    }

    const group = await this.groupCreateService.execute(groupDto);
    const participants = await this.participantFindService.findParticipantsByChampionship(championshipId);

    await this.matchPairService.execute(group.id, participants);
  }
}
