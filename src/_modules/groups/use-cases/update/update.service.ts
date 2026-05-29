import { Injectable } from "@nestjs/common";
import { GroupRepository } from "../../repository/group.repository";
import { UpdateGroupDto } from "../../models/dtos/update-group.dto";

@Injectable()
export class UpdateGroupService {
    constructor(
        private readonly repository: GroupRepository
    ) { }

    async execute(id: string, updateGroupDto: UpdateGroupDto) {
        return await this.repository.update(updateGroupDto, id);
    }
}