import { Injectable } from '@nestjs/common';
import { Group } from '../../models/entity/group.entity';
import { CreateGroupDto } from '../../models/dtos/create-group.dto';
import { GroupRepository } from '../../repository/group.repository';
import { ChampionshipFindService } from '../../../championships/use-cases/find-championship/find-championship.service';

@Injectable()
export class CreateGroupService {
constructor( 
    private readonly repository: GroupRepository,
    private readonly findChampionship: ChampionshipFindService
) {}

    async execute(createGroupDto: CreateGroupDto): Promise<Group> {
        await this.findChampionship.findChampionshipById(createGroupDto.championshipId);

        const group: Group = await this.repository.createAndSave(createGroupDto);

        return group;
    }
}