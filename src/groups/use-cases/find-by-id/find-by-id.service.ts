import { Injectable, NotFoundException } from "@nestjs/common";
import { GroupRepository } from "../../repository/group.repository";
import { Group } from "../../models/entity/group.entity";

@Injectable()
export class FindGroupByIdService {
    constructor(
        private readonly repository: GroupRepository
    ) { }

    async execute(id: string): Promise<Group> {
        const group = await this.repository.findById(id);

        if(!group) throw new NotFoundException('Group not found');

        return group;
    }
} 