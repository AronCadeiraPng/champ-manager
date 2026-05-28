import { RolesGuard } from "../../../_common/guards/roles.guard";
import { UserRolesEnum } from "../../../_common/enums/user-roles.enum";
import {
    Controller,
    Get,
    UseGuards
} from "@nestjs/common";
import {
    ApiNotFoundResponse,
    ApiOperation,
    ApiTags,
    ApiUnauthorizedResponse
} from "@nestjs/swagger";
import { Roles } from "../../../_decorators/roles.decorator";
import { JwtAuthGuard } from "../../../auth/guards/jwt-auth.guard";
import { FindAllGroupService } from "./find-all.service";
import { Group } from "../../models/entity/group.entity";


@ApiTags('groups')
@Controller('group')
export class FindAllGroupController {
    constructor(
        private readonly findAll: FindAllGroupService
    ) { }

    @Get('all')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRolesEnum.ADMIN, UserRolesEnum.MANAGER)
    @ApiOperation({ summary: 'Return all groups' })
    @ApiNotFoundResponse({ description: 'Group not found' })
    @ApiUnauthorizedResponse({ description: 'Permission denied' })
    async find(): Promise<Group[]> {
        return await this.findAll.execute();
    }
}
