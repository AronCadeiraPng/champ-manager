import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Team } from "src/teams/models/entity/team.entity";
import { Repository } from "typeorm";

@Injectable()
export class TeamFindService {
    constructor(
        @InjectRepository(Team) private readonly teamRepository: Repository<Team>
    ){}

    async findTeamByAll(): Promise<Team[]> {
        const teams = await this.teamRepository.find();

        return teams;
    }
}