import { Injectable } from "@nestjs/common";
import { GroupRepository } from "../../repository/group.repository";
import { Group } from "../../models/entity/group.entity";

@Injectable()
export class FindAllGroupsService {
    constructor(
        private readonly repository: GroupRepository
    ) { }

    async execute(): Promise<Group[]> {
        return await this.repository.findAll();
    }
}