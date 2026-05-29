import { Controller } from "@nestjs/common";
import { UpdateGroupService } from "./update.service";

@Controller('groups')
export class UpdateGroupController {
    constructor(
        private readonly groupUpdate: UpdateGroupService  
    ) { }
    

    async execute(id: string, updateGroupDto) {
        return await this.groupUpdate.execute(id, updateGroupDto);
    }
}