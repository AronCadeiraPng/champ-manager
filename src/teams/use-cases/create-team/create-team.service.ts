import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from '../../models/dtos/create-team.dto';
import { Team } from 'src/teams/models/entity/team.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberCreateService } from 'src/members/use-cases/create-member/create-member.service';

@Injectable()
export class TeamCreateService {
  constructor(
    @InjectRepository(Team) private readonly teamRepository: Repository<Team>,
    private readonly memberCreateService: MemberCreateService
  ) {}

  async execute(createTeamDto: CreateTeamDto) {
    const team: Team = new Team();

    await this.teamRepository.save(team);

    const members = await Promise.all(
      (createTeamDto.membersId ?? []).map((userId) =>
        this.memberCreateService.execute({ userId, teamId: team.id })
      )
    );

    team.members = members;
    return this.teamRepository.save(team);
  }
}
