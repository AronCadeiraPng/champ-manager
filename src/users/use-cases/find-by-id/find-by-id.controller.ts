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
import { FindUserByIdService } from "./find-by-id.service";
import { JwtAuthGuard } from "../../../auth/guards/jwt-auth.guard";


@ApiTags('users')
@Controller('user')
export class FindUserByIdController {
  constructor(
    private readonly findUserById: FindUserByIdService
  ) {}

    @Get(':id')
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
  