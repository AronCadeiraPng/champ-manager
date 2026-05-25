import { BadRequestException, Injectable } from '@nestjs/common';
import { ChampionshipFindService } from '../find-championship/find-championship.service';
import { CreateGroupDto } from '../../../groups/models/dtos/create-group.dto';
import { GroupCreateService } from '../../../groups/use-cases/create-group/create-group.service';
import { MatchPairService } from '../../../matches/use-cases/pair-matches/pair-matches.service';
import { ParticipantFindService } from '../../../participant/use-cases/find-participants/find-participants.service';
import { GroupFindService } from '../../../groups/use-cases/find-group/find-group.service';
import { PhaseEnum } from '../../../_common/enums/phase-name.enum';

@Injectable()
export class StartGroupPhaseService {
  constructor(
    private readonly championshipFindService: ChampionshipFindService,
    private readonly groupCreateService: GroupCreateService,
    private readonly groupFindService: GroupFindService,
    private readonly matchPairService: MatchPairService,
    private readonly participantFindService: ParticipantFindService,
  ) {}

  async execute(championshipId: string) {
    const championship = await this.championshipFindService.findChampionshipById(championshipId);
    
    const groupPhaseExists = await this.groupFindService.ByPhase(championshipId, PhaseEnum.GROUP_FASE);

    if(groupPhaseExists) throw new BadRequestException('Este torneio já tem uma fase de grupo definida!');

    const groupDto: CreateGroupDto = {
      championshipId: championshipId
    }

    const group = await this.groupCreateService.execute(groupDto);
    const participants = await this.participantFindService.findParticipantsByChampionship(championshipId);

    await this.matchPairService.execute(group.id, participants);
  }
}
