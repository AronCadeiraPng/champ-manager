import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  HttpStatus,
} from '@nestjs/common';
import { CreateSportDto } from '../models/dtos/create-sport.dto';
import { SportCreateService } from '../use-cases/create-sport/create-sport.service';
import { Sport } from '../models/entity/sport.entity';
import { SportFindService } from '../use-cases/find-sport/find-sport.service';
import { UpdateSportDto } from '../models/dtos/update-sport.dto';
import { SportUpdateService } from '../use-cases/update-sport/update-sport.service';
import { SportDeleteService } from '../use-cases/delete-sport/delete-sport.service';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from '../../users/models/entity/user.entity';

@Controller('spo')
export class SportsController {
  constructor(
    private readonly sportCreateService: SportCreateService,
    private readonly sportFindService: SportFindService,
    private readonly sportDeleteService: SportDeleteService,
    private readonly sportUpdateService: SportUpdateService,
  ) {}

  @Post('create')
  @ApiOperation({ summary: 'Cria um novo esporte' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: User,
  })
  async create(@Body() createSportDto: CreateSportDto): Promise<Sport> {
    return this.sportCreateService.create(createSportDto);
  }

  @Get('all')
  @ApiOperation({ summary: 'Retorna todos os esportes' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: User,
  })
  async getAll(): Promise<Sport[]> {
    return this.sportFindService.findAllSport();
  }

  @ApiOperation({ summary: 'Retorna um esporte pelo id' })
  @ApiBody({ type: CreateSportDto })
  @ApiResponse({
    status: HttpStatus.OK,
    type: User,
  })
  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Sport> {
    return this.sportFindService.findSportById(id);
  }

  @ApiOperation({ summary: 'Atualiza um esporte pelo id' })
  @ApiBody({ type: CreateSportDto })
  @ApiResponse({
    status: HttpStatus.OK,
    type: User,
  })
  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateSportDto: UpdateSportDto,
  ): Promise<Sport> {
    return this.sportUpdateService.update(id, updateSportDto);
  }

  @ApiOperation({
    summary: 'Deleta um esporte pelo id',
    description:
      'O esporte não é realmente deletado, apenas recebe true ao atributo Deleted',
  })
  @ApiBody({ type: CreateSportDto })
  @ApiResponse({
    status: HttpStatus.OK,
    type: User,
  })
  @Delete(':id')
  async deleteById(@Param('id', ParseUUIDPipe) id: string) {
    return this.sportDeleteService.delete(id);
  }
}
