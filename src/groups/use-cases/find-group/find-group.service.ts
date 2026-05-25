import { Injectable } from '@nestjs/common';
import { ChampionshipStatusEnum } from '../../../_common/enums/championship-status.enum';
import { PhaseStatusEnum } from '../../../_common/enums/phase-status.enum';
import { PhaseEnum } from '../../../_common/enums/phase-name.enum';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from '../../models/entity/group.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '../../../_common/exceptions';

@Injectable()
export class GroupFindService {
constructor(
    @InjectRepository(Group) private readonly groupRepository: Repository<Group>
) {}

    async ById(championshipId: string): Promise<Group> {
        const group = await this.groupRepository.findOne({
            where: {
                championshipId: championshipId
            }
        })

        if(!group) throw new NotFoundException('Grupo');

        return group;
    }

    async ByPhase(championshipId: string, groupStatus: PhaseEnum): Promise<Group> {
        return await this.groupRepository.findOne({
            where: {
                id: championshipId,
                phase: groupStatus
            }
        })
    }
}