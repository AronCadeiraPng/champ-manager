import { BadRequestException, Injectable } from "@nestjs/common";
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

    async findTeamById(id: string): Promise<Team>{
        const team = await this.teamRepository.findOne({
            where: {
                id: id
            }
        })

        if(!team) throw new BadRequestException('Time', id);

        return team;
    }
}