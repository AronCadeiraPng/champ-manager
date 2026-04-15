import { Member } from "src/members/models/entity/member.entity";
import { Repository } from "typeorm";
export declare class MemberDeleteService {
    private readonly memberRepository;
    constructor(memberRepository: Repository<Member>);
    deleteAllMembers(): Promise<void>;
}
