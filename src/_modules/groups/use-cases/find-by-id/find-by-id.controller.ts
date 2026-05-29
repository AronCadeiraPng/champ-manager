import { AuthGuard } from "@nestjs/passport";
import { RolesGuard } from "../../../../_common/guards/roles.guard";
import { UserRolesEnum } from "../../../../_common/enums/user-roles.enum";
import {
    Controller,
    Get, Param,
    ParseUUIDPipe,
    UseGuards
} from "@nestjs/common";
import {
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiOperation,
    ApiTags,
    ApiUnauthorizedResponse
} from "@nestjs/swagger";
import { Roles } from "../../../../_decorators/roles.decorator";
import { JwtAuthGuard } from "../../../../auth/guards/jwt-auth.guard";
import { Group } from "../../models/entity/group.entity";
import { FindGroupByIdService } from "./find-by-id.service";


@ApiTags('groups')
@Controller('group')
export class FindGroupByIdController {
    constructor(
        private readonly findById: FindGroupByIdService
    ) { }

    @Get(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRolesEnum.ADMIN, UserRolesEnum.MANAGER)
    @ApiOperation({ summary: 'Return group by id' })
    @ApiOkResponse({ type: () => Group })
    @ApiNotFoundResponse({ description: 'Group not found' })
    @ApiUnauthorizedResponse({ description: 'Permission denied' })
    async find(
        @Param('id', ParseUUIDPipe) id: string
    ): Promise<Group> 
    {
        return await this.findById.execute(id);
    }
}
