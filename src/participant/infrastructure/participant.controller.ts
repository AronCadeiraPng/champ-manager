import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ParticipantFindService } from '../use-cases/find-participants/find-participants.service';
import { Participant } from '../models/entity/participant.entity';
import { ParticipantCreateService } from '../use-cases/create-participant/create-participant.service';
import { CreateParticipantDto } from '../models/dtos/create-participant.dto';
import {
  ApiBadRequestResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Player } from '../../players/models/entity/player.entity';

@ApiTags('participa')
@Controller('participa')
export class ParticipantController {
  constructor(
    private readonly participantFindService: ParticipantFindService,
    private readonly participantCreateService: ParticipantCreateService,
  ) {}

  @Post(':id/create')
  @ApiOperation({ summary: 'Cria um novo participante' })
  @ApiOkResponse({ type: CreateParticipantDto })
  @ApiBadRequestResponse({ description: 'Torneio não encontrado' })
  async createParticipant(
    @Param('id', ParseUUIDPipe) championshipId: string,
    @Body() createParticipantDto: CreateParticipantDto,
  ) {
    return this.participantCreateService.createParticipant(
      championshipId,
      createParticipantDto,
    );
  }

  @Get('/players')
  async findByPlayer(@Body() players: Player[]) {
    return await this.participantFindService.ByPlayer(players);
  }

  @Get('all')
  @ApiOperation({ summary: 'Retorna todos os participantes' })
  @ApiOkResponse({ type: CreateParticipantDto })
  @ApiNoContentResponse({ description: 'Nenhum participante encontrado' })
  async findAllParticipants(): Promise<Participant[]> {
    return this.participantFindService.findAllParticipants();
  }

  @Get('championship/:id')
  @ApiOperation({ summary: 'Retorna todos os participantes em um torneio' })
  @ApiOkResponse({ type: CreateParticipantDto })
  @ApiNoContentResponse({ description: 'Nenhum participante encontrado' })
  async findParticipantsByChampionship(
    @Param('id', ParseUUIDPipe) championshipId: string,
  ) {
    return this.participantFindService.findParticipantsByChampionship(
      championshipId,
    );
  }
}
