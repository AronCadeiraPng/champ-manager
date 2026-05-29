import { Controller, Get, UseGuards } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiOkResponse, ApiNotFoundResponse, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { UserRolesEnum } from "../../../../_common/enums/user-roles.enum";
import { RolesGuard } from "../../../../_common/guards/roles.guard";
import { Roles } from "../../../../_decorators/roles.decorator";
import { JwtAuthGuard } from "../../../../auth/guards/jwt-auth.guard";
import { UsersListDto } from "../../models/dtos/users-list.dto";
import { User } from "../../models/entity/user.entity";
import { FindAllUserService } from "./find-all.service";


@ApiTags('users')
@Controller('user')
export class FindAllUserController {
    constructor(
        private readonly findAll: FindAllUserService
    ) { }

    @Get('all')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRolesEnum.ADMIN, UserRolesEnum.MANAGER)
    @ApiOperation({ summary: 'Return all users' })
    @ApiOkResponse({ type: () => UsersListDto })
    @ApiNotFoundResponse({ description: 'User not found' })
    @ApiUnauthorizedResponse({ description: 'Permission denied' })
    async find(
    ): Promise<User[]> {
        return await this.findAll.execute();
    }
}
