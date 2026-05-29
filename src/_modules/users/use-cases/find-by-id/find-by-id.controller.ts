import { Controller, Get, UseGuards, Param, ParseUUIDPipe } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiOkResponse, ApiNotFoundResponse, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { UserRolesEnum } from "../../../../_common/enums/user-roles.enum";
import { RolesGuard } from "../../../../_common/guards/roles.guard";
import { Roles } from "../../../../_decorators/roles.decorator";
import { JwtAuthGuard } from "../../../../auth/guards/jwt-auth.guard";
import { UsersListDto } from "../../models/dtos/users-list.dto";
import { User } from "../../models/entity/user.entity";
import { FindUserByIdService } from "./find-by-id.service";

@ApiTags('users')
@Controller('user')
export class FindUserByIdController {
  constructor(
    private readonly findUserById: FindUserByIdService
  ) {}

    @Get('id/:id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRolesEnum.ADMIN, UserRolesEnum.MANAGER)
    @ApiOperation({ summary: 'Retorna um usuário pelo id' })
    @ApiOkResponse({ type: () => UsersListDto })
    @ApiNotFoundResponse({ description: 'Usuário não encontrado' })
    @ApiUnauthorizedResponse({ description: 'Permissão negada' })
    async find(@Param('id', ParseUUIDPipe) id: string): Promise<User> {
      return await this.findUserById.execute(id);
    }
  }
  