import { Injectable, Param } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdateTeamDto } from "src/teams/models/dtos/update-team.dto";
import { Team } from "src/teams/models/entity/team.entity";
import { Repository } from "typeorm";
import { TeamFindService } from "../find-team/find-team.service";

@Injectable()
export class TeamUpdateService {
    constructor(
        @InjectRepository(Team) private readonly teamRepository: Repository<Team>,
        private readonly teamFindService: TeamFindService
    ){}

    async updateTeam(teamId: string, updateTeamDto: UpdateTeamDto) { 
        const team = await this.teamFindService.ById(teamId)

        Object.assign(team, updateTeamDto)

        return this.teamRepository.update(teamId, updateTeamDto)
    }
}