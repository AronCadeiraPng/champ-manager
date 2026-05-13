import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { CreateMemberDto } from '../models/dtos/create-member.dto';
import { MemberCreateService } from '../use-cases/create-member/create-member.service';
import { MemberFindService } from '../use-cases/find-member/find-member.service';
import { Member } from '../models/entity/member.entity';
import {
  ApiBadRequestResponse,
  ApiForbiddenResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

@Controller('members')
export class MembersController {
  constructor(
    private readonly memberCreateService: MemberCreateService,
    private readonly memberFindService: MemberFindService,
  ) {}

  @Post('new')
  @ApiOperation({ summary: 'Cria um novo membro de time' })
  @ApiBadRequestResponse({ description: 'Membro já registrado no time' })
  @ApiForbiddenResponse({ description: 'Permissão negada' })
  async createMember(@Body() createMemberDto: CreateMemberDto) {
    return await this.memberCreateService.execute(createMemberDto);
  }

  @ApiOperation({ summary: 'Retorna todos os membros' })
  @ApiOkResponse({ type: CreateMemberDto })
  @ApiNoContentResponse({ description: 'Nenhum membro encontrado' })
  @Get('all')
  async findAllMembers(): Promise<Member[]> {
    return await this.memberFindService.findAllMembers();
  }

  @ApiOperation({ summary: 'Retorna todos os membros pelo id do time' })
  @ApiOkResponse({ type: CreateMemberDto })
  @ApiNoContentResponse({ description: 'Nenhum membro encontrado' })
  @Get(':id/all')
  async findAllMembersByTeam(
    @Param('id', ParseUUIDPipe) teamId: string,
  ): Promise<Member[]> {
    return await this.memberFindService.findAllMembersByTeam(teamId);
  }

  @ApiOperation({ summary: 'Retorna um membro pelo id' })
  @ApiOkResponse({ type: CreateMemberDto })
  @ApiBadRequestResponse({ description: 'Membro não encontrado' })
  @Get(':id')
  async findMemberById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<Member> {
    return await this.findMemberById(id);
  }
}
