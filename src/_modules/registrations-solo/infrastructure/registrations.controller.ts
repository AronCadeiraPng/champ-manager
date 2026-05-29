import { Controller, Post, UseGuards, Param, ParseUUIDPipe, Get, Delete } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiTags, ApiOperation, ApiOkResponse, ApiBadRequestResponse, ApiNoContentResponse } from "@nestjs/swagger";
import { UserRolesEnum } from "../../../_common/enums/user-roles.enum";
import { RolesGuard } from "../../../_common/guards/roles.guard";
import { Roles } from "../../../_decorators/roles.decorator";
import { CreateRegistrationSoloDto } from "../models/dtos/create-registration.dto";
import { RegistrationSoloListDto } from "../models/dtos/registrations-solo-list.dto";
import { RegistrationSolo } from "../models/entity/registration.entity";
import { RegistrationSoloCreateService } from "../use-cases/create-registration/create-registration.service";
import { RegistrationSoloDeleteService } from "../use-cases/delete-registration/delete-registration.service";
import { RegistrationSoloFindService } from "../use-cases/find-registration/find-registration.service";

@ApiTags('registrations-solo')
@Controller('registrations/solo')
export class RegistrationsSoloController {
  constructor(
    private readonly registrationFindService: RegistrationSoloFindService,
    private readonly registrationCreateService: RegistrationSoloCreateService,
    private readonly registrationDeleteService: RegistrationSoloDeleteService,
  ) {}

  @Post(':championship/new/:user')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRolesEnum.ADMIN)
  @ApiOperation({
    summary: 'Cria um novo registro individual em um campeonato',
  })
  @ApiOkResponse({ type: () => CreateRegistrationSoloDto })
  @ApiBadRequestResponse({ description: 'Credenciais inválidas' })
  async register(
    @Param('championship', ParseUUIDPipe) championshipId: string,
    @Param('user', ParseUUIDPipe) userId: string,
  ): Promise<RegistrationSolo> {
    return await this.registrationCreateService.register(
      championshipId,
      userId,
    );
  }

  @Get('all')
  @ApiOperation({ summary: 'Retorna todos os registros' })
  @ApiOkResponse({ type: () => RegistrationSoloListDto })
  @ApiNoContentResponse({ description: 'Nenhum registro encontrado' })
  async getAllRegistrations(): Promise<RegistrationSolo[]> {
    return await this.registrationFindService.allRegisters();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um registro por id' })
  @ApiOkResponse({ type: () => RegistrationSoloListDto })
  @ApiBadRequestResponse({ description: 'Registro não encontrado' })
  async getRegistrationById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<RegistrationSolo> {
    return await this.registrationFindService.findRegisterById(id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRolesEnum.ADMIN)
  @ApiOperation({ summary: 'Deletar um registro' })
  @ApiNoContentResponse({ description: 'Registro deletado com sucesso' })
  @ApiBadRequestResponse({ description: 'Registro não encontrado' })
  async delete(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<RegistrationSolo> {
    return await this.registrationDeleteService.deleteRegistrationSolo(id);
  }
}
