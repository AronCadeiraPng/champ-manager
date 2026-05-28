import { Controller } from "@nestjs/common";
import { CreateGroupService } from "./create-group.service";
import { CreateGroupDto } from "../../models/dtos/create-group.dto";
import { Group } from "../../models/entity/group.entity";

@Controller('group')
export class CreateGroupController {
    constructor(
        private readonly createGroup: CreateGroupService,
    ) { }

    async execute(createGroupDto: CreateGroupDto): Promise<Group> {


        return await this.createGroup.execute(createGroupDto);
    } 
}
