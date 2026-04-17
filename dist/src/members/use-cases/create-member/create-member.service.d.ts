import { CreateMemberDto } from '../../models/dtos/create-member.dto';
import { Member } from '../../models/entity/member.entity';
import { Repository } from 'typeorm';
import { MemberFindService } from '../find-member/find-member.service';
export declare class MemberCreateService {
    private readonly memberRepository;
    private readonly memberFindService;
    constructor(memberRepository: Repository<Member>, memberFindService: MemberFindService);
    execute(createMemberDto: CreateMemberDto): Promise<Member>;
}
