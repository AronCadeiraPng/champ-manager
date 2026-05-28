import { BadRequestException, Injectable } from '@nestjs/common';
import { ChampionshipFindService } from '../find-championship/find-championship.service';
import { CreateGroupDto } from '../../../groups/models/dtos/create-group.dto';
import { MatchPairService } from '../../../matches/use-cases/pair-matches/pair-matches.service';
import { ParticipantFindService } from '../../../participant/use-cases/find-participants/find-participants.service';
import { PhaseEnum } from '../../../_common/enums/phase-name.enum';
import { CreateGroupService } from '../../../groups/use-cases/create-group/create-group.service';
import { FindGroupByPhaseService } from '../../../groups/use-cases/find-by-phase/find-group.service';
import { UpdateGroupService } from '../../../groups/use-cases/update/update.service';
import { UpdateGroupDto } from '../../../groups/models/dtos/update-group.dto';

@Injectable()
export class StartGroupPhaseService {
  constructor(
    private readonly championshipFindService: ChampionshipFindService,
    private readonly groupCreateService: CreateGroupService,
    private readonly findGroupByPhase: FindGroupByPhaseService,
    private readonly matchPairService: MatchPairService,
    private readonly participantFindService: ParticipantFindService,
    private readonly groupUpdateService: UpdateGroupService
  ) {}

  async execute(championshipId: string) {
    await this.championshipFindService.findChampionshipById(championshipId);
    
    const groupPhaseExists = await this.findGroupByPhase.execute(championshipId, PhaseEnum.GROUP_PHASE);

    // if(groupPhaseExists) throw new BadRequestException('Este torneio já tem uma fase de grupo definida!');

    const groupDto: CreateGroupDto = {
      championshipId: championshipId,
      phase: PhaseEnum.GROUP_PHASE
    }

    const group = await this.groupCreateService.execute(groupDto);
    const participants = await this.participantFindService.findParticipantsByChampionship(championshipId);

    const matches = await this.matchPairService.execute(group.id, participants);

    const updateGroup: UpdateGroupDto = {
      matches: matches,
      ...group
    }

    return await this.groupUpdateService.execute(updateGroup, group.id);
  }
} 
