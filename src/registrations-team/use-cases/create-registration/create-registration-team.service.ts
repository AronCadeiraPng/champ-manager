import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChampionshipFindService } from 'src/championships/use-cases/find-championship/find-championship.service';
import { RegistrationTeam } from 'src/registrations-team/models/entity/registration-team.entity';
import { CreateTeamDto } from 'src/teams/models/dtos/create-team.dto';
import { TeamCreateService } from 'src/teams/use-cases/create-team/create-team.service';
import { UserFindService } from 'src/users/use-cases/find-user/find-user.service';
import { Repository } from 'typeorm';

@Injectable()
export class RegistrationsTeamCreateService {
  constructor(
    @InjectRepository(RegistrationTeam) private readonly registrationTeamRepository: Repository<RegistrationTeam>,
    private readonly teamCreateService: TeamCreateService,
    private readonly championshipFindService: ChampionshipFindService,
    private readonly userFindService: UserFindService
  ) {}
  
  async create(championshipId: string, createTeamDto: CreateTeamDto) {
    const members = createTeamDto.membersId;

    await Promise.all(
      members.map((memberId) =>
        this.userFindService.findUserById(memberId),
    ),
  );
    const team = await this.teamCreateService.create(createTeamDto);
    const championship = await this.championshipFindService.findChampionshipById(championshipId);

    const registration = this.registrationTeamRepository.create({
      championshipId: championship.id
    })

    team.registrationId = registration.id;

    return this.registrationTeamRepository.save(registration);
  }
}