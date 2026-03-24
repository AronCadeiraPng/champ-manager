import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards, ParseUUIDPipe } from '@nestjs/common';
import { RegistrationsService } from './registrations.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { UserRoles } from 'src/common/enums/user-roles.enum';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Registration } from './entities/registration.entity';
import { RegisterUserDto } from 'src/users/dto/register-user.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';

@Controller('registrations')
export class RegistrationsController {
  constructor(private readonly registrationsService: RegistrationsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('new/:id')
  async register(@Body() createRegistrationDto: CreateRegistrationDto, @Request() req ){
    return await this.registrationsService.register(createRegistrationDto, req.user.userId)
  }

  @Delete('delete/:id')
  @Roles(UserRoles.ADMIN)
  @ApiOperation({ summary: 'Deletar um registro' })
  @ApiResponse({
    status: 201,
    description: 'Registro deletado com sucesso',
    type: Registration,
  })
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id', ParseUUIDPipe)id: string) {
    return await this.registrationsService.deleteRegistration(id)
  }

  @Get('all')
  @ApiOperation({ summary: 'Retorna todos os registros' })
  @ApiResponse({
    status: 201,
    type: Registration,
  })
  async getAllRegistrations() {
    return await this.registrationsService.allRegisters();
  }
}
