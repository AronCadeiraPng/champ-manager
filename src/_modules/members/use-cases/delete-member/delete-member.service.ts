import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from '../../models/entity/member.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MemberDeleteService {
    constructor(
        @InjectRepository(Member) private readonly memberRepository: Repository<Member>
    ) {}

    async deleteAllMembers() {
        return this.memberRepository.clear()
    }
}
