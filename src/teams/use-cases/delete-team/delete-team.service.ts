import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MemberDeleteService } from "src/members/use-cases/delete-member/delete-member.service";
import { Team } from "src/teams/models/entity/team.entity";
import { Repository } from "typeorm";

@Injectable()
export class TeamDeleteService {
    constructor(
        @InjectRepository(Team) private readonly teamRepository: Repository<Team>,
        private readonly memberDeleteService: MemberDeleteService
    ) {}

    async deleteAllTeams() {
        await this.memberDeleteService.deleteAllMembers()
        return await this.teamRepository.clear()
    }
}