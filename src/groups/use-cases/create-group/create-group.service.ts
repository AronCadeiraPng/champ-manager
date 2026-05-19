import { Injectable } from '@nestjs/common';
import { Group } from '../../models/entity/group.entity';
import { CreateGroupDto } from '../../models/dtos/create-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GroupCreateService {
constructor( 
    @InjectRepository(Group) private readonly groupRepository: Repository<Group>,
) {}

    async execute(createGroupDto: CreateGroupDto): Promise<Group> {
        const group: Group = await this.groupRepository.save(createGroupDto);

        return group;
    }
}