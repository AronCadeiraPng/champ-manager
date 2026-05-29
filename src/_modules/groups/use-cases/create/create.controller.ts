import { Controller } from "@nestjs/common";
import { CreateGroupService } from "./create.service";
import { Group } from "../../models/entity/group.entity";
import { CreateGroupDto } from "../../models/dtos/create-group.dto";

@Controller('groups')
export class CreateGroupController {
    constructor(
        private readonly createGroup: CreateGroupService
    ) { }  

    async execute(createGroupDto: CreateGroupDto): Promise<Group> {
        return await this.createGroup.execute(createGroupDto);
    }
} 