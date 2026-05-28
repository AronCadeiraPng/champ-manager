import { Injectable } from "@nestjs/common";
import { GroupRepository } from "../../repository/group.repository";
import { Group } from "../../models/entity/group.entity";

@Injectable()
export class FindAllGroupService {
    constructor(
        private readonly repository: GroupRepository
    ) { }

    async execute(): Promise<Group[]> {
        const groups = await this.repository.findAll();

        return groups;
    }
}