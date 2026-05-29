import { Injectable, Param } from '@nestjs/common';
import { TeamFindService } from '../find-team/find-team.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateTeamDto } from '../../models/dtos/update-team.dto';
import { Team } from '../../models/entity/team.entity';

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