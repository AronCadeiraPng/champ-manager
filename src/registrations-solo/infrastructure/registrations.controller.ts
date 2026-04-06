import { Controller, Get, Post, Body, Param, Delete, UseGuards, ParseUUIDPipe } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { UserRoles } from 'src/common/enums/user-roles.enum';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateRegistrationSoloDto } from '../models/dtos/create-registration.dto';
import { RegistrationSoloFindService } from '../use-cases/find-registration/find-registration.service';
import { RegistrationSoloCreateService } from '../use-cases/create-registration/create-registration.service';
import { RegistrationSoloDeleteService } from '../use-cases/delete-registration/delete-registration.service';
import { RegistrationSolo } from '../models/entity/registration.entity';

@Controller('registrations/solo')
export class RegistrationsSoloController {
  constructor(
    private readonly registrationFindService: RegistrationSoloFindService,
    private readonly registrationCreateService: RegistrationSoloCreateService, 
    private readonly registrationDeleteService:  RegistrationSoloDeleteService
  ) { }


  @UseGuards(JwtAuthGuard)
  @Post('new')
  async register(
    @Body() createRegistrationDto: CreateRegistrationSoloDto
  ): Promise<RegistrationSolo>
  {
    return await this.registrationCreateService.register(createRegistrationDto)
  }


  @Get('all')
  @ApiOperation({ summary: 'Retorna todos os registros' })
  @ApiResponse({
    status: 201, type: RegistrationSolo
  })
  async getAllRegistrations(): Promise<RegistrationSolo[]>
  {
    return await this.registrationFindService.allRegisters();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um registro por id' })
  @ApiResponse({
    status: 201,
    type: RegistrationSolo
  })
  async getRegistrationById(
    @Param('id', ParseUUIDPipe) id: string
  ): Promise<RegistrationSolo>
  {
    return await this.registrationFindService.findRegisterById(id)
  }


  @Delete(':id')
  @Roles(UserRoles.ADMIN)
  @ApiOperation({ summary: 'Deletar um registro' })
  @ApiResponse({ 
    status: 201, 
    description: 'Registro deletado com sucesso',
    type: RegistrationSolo,
  })
  @UseGuards(JwtAuthGuard)
  async delete(
    @Param('id', ParseUUIDPipe) id: string
  ): Promise<RegistrationSolo>
  {
    return await this.registrationDeleteService.deleteRegistrationSolo(id)
  }
}

