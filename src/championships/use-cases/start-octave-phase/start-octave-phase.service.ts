import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from '../../../groups/models/dtos/create-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from '../../../groups/models/entity/group.entity';
import { Repository } from 'typeorm';
import { GroupFindService } from '../../../groups/use-cases/find-group/find-group.service';
import { PhaseEnum } from '../../../_common/enums/phase-name.enum';

@Injectable()
export class Service {
constructor(
    @InjectRepository(Group) private readonly groupRepository: Repository<Group>,
    private readonly groupFindService: GroupFindService
) {}

async execute(championshipId: string, createGroupDto: CreateGroupDto): Promise<Group> {
    const groupPhase = await this.groupFindService.ByPhase(championshipId, PhaseEnum.GROUP_FASE);

    const group = await this.groupRepository.save(createGroupDto);

    return group;
}
}