import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { CreateMemberDto } from '../models/dtos/create-member.dto';
import { MemberCreateService } from '../use-cases/create-member/create-member.service';
import { MemberFindService } from '../use-cases/find-member/find-member.service';
import { Member } from '../models/entity/member.entity';

@Controller('members')
export class MembersController {
  constructor(
    private readonly memberCreateService: MemberCreateService,
    private readonly memberFindSerivce: MemberFindService,
  ) {}

  @Post('new')
  async createMember(
    @Body() createMemberDto: CreateMemberDto
  )
  {
    return await this.memberCreateService.create(createMemberDto)
  }

  @Get('all')
  async findAllMembers(): Promise<Member[]> 
  {
    return await this.memberFindSerivce.findAllMembers()
  }

  @Get(':id')
  async findMemberById(
    @Param('id', ParseUUIDPipe) id: string 
  ): Promise<Member>
  {
    return await this.findMemberById(id)
  }
}
