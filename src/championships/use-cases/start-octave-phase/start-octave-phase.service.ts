import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from '../../../groups/models/dtos/create-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from '../../../groups/models/entity/group.entity';
import { Repository } from 'typeorm';
import { PhaseEnum } from '../../../_common/enums/phase-name.enum';
import { FindGroupByPhaseService } from '../../../groups/use-cases/find-by-phase/find-group.service';

@Injectable()
export class Service {
constructor(
    @InjectRepository(Group) private readonly groupRepository: Repository<Group>,
    private readonly findGroupByPhase: FindGroupByPhaseService
) {}

async execute(championshipId: string, createGroupDto: CreateGroupDto): Promise<Group> {
    const groupPhase = await this.findGroupByPhase.execute(championshipId, PhaseEnum.GROUP_PHASE);

    const group = await this.groupRepository.save(createGroupDto);

    return group;
}
}