import { Injectable } from "@nestjs/common";
import { GroupRepository } from "../../repository/group.repository";
import { Group } from "../../models/entity/group.entity";

@Injectable()
export class FindGroupByIdService {
    constructor(
        private readonly repository: GroupRepository
    ) { }

    async execute(id: string): Promise<Group | null> {
        return await this.repository.findById(id);
    }
}