import { Injectable } from "@nestjs/common";
import { GroupRepository } from "../../repository/group.repository";
import { UpdateGroupDto } from "../../models/dtos/update-group.dto";
import { Group } from "../../models/entity/group.entity";

@Injectable()
export class UpdateGroupService {
    constructor(
        private readonly repository: GroupRepository
    ) { }

    async execute(updateGroupDto: UpdateGroupDto, id: string): Promise<Group> {
        return await this.repository.update(updateGroupDto, id);
    }
}