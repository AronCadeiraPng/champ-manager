import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMemberDto } from '../../models/dtos/create-member.dto';
import { Member } from '../../models/entity/member.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberFindService } from '../find-member/find-member.service';

@Injectable()
export class MemberCreateService {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
    private readonly memberFindService: MemberFindService,
  ) {}

  async execute(createMemberDto: CreateMemberDto): Promise<Member> {
    const memberExists = await this.memberFindService.findMemberByTeam(
      createMemberDto.userId,
      createMemberDto.teamId,
    );
    if (memberExists)
      throw new BadRequestException(
        'Esse membro já está registrado no respectivo time!'
      );

    const member = this.memberRepository.create(createMemberDto);

    await this.memberRepository.save(member);
    return member;
  }
}
