import { AuthGuard } from "@nestjs/passport";
import { RolesGuard } from "../../../_common/guards/roles.guard";
import { UserRolesEnum } from "../../../_common/enums/user-roles.enum";
import { UsersListDto } from "../../models/dtos/users-list.dto";
import { 
    Body,
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
import { FindUserByCpfService } from "./find-by-cpf.service";


@ApiTags('users')
@Controller('user')
export class FindUserByCpfController {
  constructor(
    private readonly findUserByCpf: FindUserByCpfService
  ) {}

    @Get('cpf')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRolesEnum.ADMIN, UserRolesEnum.MANAGER)
    @ApiOperation({ summary: 'Retorna um usuário pelo cpf' })
    @ApiOkResponse({ type: () => UsersListDto })
    @ApiNotFoundResponse({ description: 'Usuário não encontrado' })
    @ApiUnauthorizedResponse({ description: 'Permissão negada' })
    async find(
      @Body() cpf: string)
      : Promise<User>
    {
      return await this.findUserByCpf.execute(cpf);
    }
  }
  