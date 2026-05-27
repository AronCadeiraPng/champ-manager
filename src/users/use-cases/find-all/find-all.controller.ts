import { AuthGuard } from "@nestjs/passport";
import { RolesGuard } from "../../../_common/guards/roles.guard";
import { UserRolesEnum } from "../../../_common/enums/user-roles.enum";
import { UsersListDto } from "../../models/dtos/users-list.dto";
import {
    Controller,
    Get, Param,
    ParseUUIDPipe,
    UseGuards
} from "@nestjs/common";
import { User } from "../../models/entity/user.entity";
import {
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiOperation,
    ApiTags,
    ApiUnauthorizedResponse
} from "@nestjs/swagger";
import { Roles } from "../../../_decorators/roles.decorator";
import { JwtAuthGuard } from "../../../auth/guards/jwt-auth.guard";
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
    async find(): Promise<User[]> {
        console.log('entrou na rota certa')
        return await this.findAll.execute();
    }
}
