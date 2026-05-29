import { Injectable } from "@nestjs/common";
import { UpdateGroupDto } from "../../models/dtos/update-group.dto";
import { GroupRepository } from "../../repository/group.repository";
import { CreateGroupDto } from "../../models/dtos/create-group.dto";
import { UpdateResult } from "typeorm";
import { Group } from "../../models/entity/group.entity";

@Injectable()
export class CreateGroupService {
    constructor(
        private readonly repository: GroupRepository
    ) { }

    async execute(createGroupDto: CreateGroupDto): Promise<Group> {
        return await this.repository.createAndSave(createGroupDto);
    }
}