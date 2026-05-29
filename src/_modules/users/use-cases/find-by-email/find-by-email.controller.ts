import { Controller, Get, UseGuards, Body } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiOkResponse, ApiNotFoundResponse, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { UserRolesEnum } from "../../../../_common/enums/user-roles.enum";
import { RolesGuard } from "../../../../_common/guards/roles.guard";
import { Roles } from "../../../../_decorators/roles.decorator";
import { JwtAuthGuard } from "../../../../auth/guards/jwt-auth.guard";
import { UsersListDto } from "../../models/dtos/users-list.dto";
import { User } from "../../models/entity/user.entity";
import { FindUserByEmailService } from "./find-by-email.service";

@ApiTags('users')
@Controller('user')
export class FindUserByEmailController {
  constructor(
    private readonly findUserByEmail: FindUserByEmailService
  ) {}

    @Get('email')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRolesEnum.ADMIN, UserRolesEnum.MANAGER)
    @ApiOperation({ summary: 'Retorna um usuário pelo email' })
    @ApiOkResponse({ type: () => UsersListDto })
    @ApiNotFoundResponse({ description: 'Usuário não encontrado' })
    @ApiUnauthorizedResponse({ description: 'Permissão negada' })
    async find(@Body() email: string): Promise<User> {
      return await this.findUserByEmail.execute(email);
    }
  }
  