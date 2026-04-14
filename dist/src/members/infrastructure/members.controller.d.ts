import { CreateMemberDto } from '../models/dtos/create-member.dto';
import { MemberCreateService } from '../use-cases/create-member/create-member.service';
import { MemberFindService } from '../use-cases/find-member/find-member.service';
import { Member } from '../models/entity/member.entity';
export declare class MembersController {
    private readonly memberCreateService;
    private readonly memberFindSerivce;
    constructor(memberCreateService: MemberCreateService, memberFindSerivce: MemberFindService);
    createMember(createMemberDto: CreateMemberDto): Promise<Member>;
    findAllMembers(): Promise<Member[]>;
    findMemberById(id: string): Promise<Member>;
}
