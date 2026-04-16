import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MemberDeleteService } from "src/members/use-cases/delete-member/delete-member.service";
import { Team } from "src/teams/models/entity/team.entity";
import { Repository } from "typeorm";
import { TeamFindService } from "../find-team/find-team.service";

@Injectable()
export class TeamDeleteService {
    constructor(
        @InjectRepository(Team) private readonly teamRepository: Repository<Team>,
        private readonly teamFindService: TeamFindService,
        private readonly memberDeleteService: MemberDeleteService
    ) {}

    async deleteTeamById(teamId: string): Promise<Team> {
        const team = await this.teamFindService.findTeamById(teamId)

        return this.teamRepository.remove(team);
    }

    async deleteAllTeams() {
        await this.memberDeleteService.deleteAllMembers()
        return await this.teamRepository.clear()
    }
}