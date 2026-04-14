import { Member } from '../../models/entity/member.entity';
import { Repository } from 'typeorm';
export declare class MemberFindService {
    private readonly memberRepository;
    constructor(memberRepository: Repository<Member>);
    findMemberById(id: string): Promise<Member>;
    findMemberByTeam(userId: string, teamId: string): Promise<Member | null>;
    findAllMembers(): Promise<Member[]>;
}
