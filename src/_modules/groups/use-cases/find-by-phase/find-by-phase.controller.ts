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
import { FindGroupByPhaseService } from "./find-group.service";
import { PhaseEnum } from "../../../../_common/enums/phase-name.enum";


@ApiTags('groups')
@Controller('groups')
export class FindGroupByPhaseController {
    constructor(
        private readonly findByPhase: FindGroupByPhaseService
    ) { }

    @Get(':id/:phase')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRolesEnum.ADMIN, UserRolesEnum.MANAGER)
    @ApiOperation({ summary: 'Return group by phase and championship id' })
    @ApiOkResponse({ type: () => Group })
    @ApiNotFoundResponse({ description: 'Group not found' })
    @ApiUnauthorizedResponse({ description: 'Permission denied' })
    async find(
        @Param('id', ParseUUIDPipe) championshipId: string, 
        @Param(':phase')phase: PhaseEnum
    ): Promise<Group> 
    {
        return await this.findByPhase.execute(championshipId, phase);
    }
}
