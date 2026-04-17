import { Injectable } from '@nestjs/common';
import { Member } from '../../models/entity/member.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from 'src/common/exceptions';

@Injectable()
export class MemberFindService {
  constructor(
    @InjectRepository(Member) private readonly memberRepository: Repository<Member>
  ) {}

  async findMemberById(id: string): Promise<Member> {
    const member = await this.memberRepository.findOne({
        where: {
            id: id
        }
    })

    if(!member) throw new NotFoundException('Membro', id)

    return member;
  }

  async findMemberByTeam(userId: string, teamId: string) {
    const member = await this.memberRepository.findOne({
        where: {
            id: userId,
            teamId: teamId
        }
    })

    return member;
  }

  async findAllMembers(): Promise<Member[]> {
    return await this.memberRepository.find()
  }

  async findAllMembersByTeam(teamId: string): Promise<Member[]> {
    return await this.memberRepository.find({
      where: {
        teamId: teamId
      }
    })
  }
}