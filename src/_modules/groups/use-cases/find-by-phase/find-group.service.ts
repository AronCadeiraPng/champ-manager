import { Injectable } from '@nestjs/common';
import { Group } from '../../models/entity/group.entity';
import { PhaseEnum } from '../../../../_common/enums/phase-name.enum';
import { GroupRepository } from '../../repository/group.repository';

@Injectable()
export class FindGroupByPhaseService {
constructor(
    private readonly repository: GroupRepository
) {}

    async execute(championshipId: string, groupStatus: PhaseEnum): Promise<Group> {
        return await this.repository.findByPhase(championshipId, groupStatus);
    }
}