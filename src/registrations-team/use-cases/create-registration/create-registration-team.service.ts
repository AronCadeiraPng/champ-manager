import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChampionshipFindService } from '../../../championships/use-cases/find-championship/find-championship.service';
import { ModalityEnum } from '../../../_common/enums/modality.enum';
import {
  ConflictException,
  NotFoundException,
} from '../../../_common/exceptions';
import { BadRequestException } from '../../../_common/exceptions/bad-request.exception';
import { RegistrationTeam } from '../../models/entity/registration-team.entity';
import { CreateTeamDto } from '../../../teams/models/dtos/create-team.dto';
import { TeamCreateService } from '../../../teams/use-cases/create-team/create-team.service';
import { UserFindService } from '../../../users/use-cases/find-all/find-user.service';
import { Repository } from 'typeorm';

@Injectable()
export class RegistrationsTeamCreateService {
  constructor(
    @InjectRepository(RegistrationTeam)
    private readonly registrationTeamRepository: Repository<RegistrationTeam>,
    private readonly teamCreateService: TeamCreateService,
    private readonly championshipFindService: ChampionshipFindService,
    private readonly userFindService: UserFindService,
  ) {}

  async execute(championshipId: string, createTeamDto: CreateTeamDto) {
    const members = createTeamDto.membersId;
    const championship =
      await this.championshipFindService.findChampionshipById(championshipId);

    if (championship.modality !== ModalityEnum.TEAM)
      throw new BadRequestException('Torneio apenas para times', 400);

    await Promise.all(
      members.map(async (memberId) => {
        this.userFindService.findUserById(memberId);
        const teamMemberExists = await this.registrationTeamRepository.findOne({
          where: {
            team: {
              members: {
                userId: memberId,
              },
            },
          },
        });

        if (teamMemberExists)
          throw new ConflictException(
            `Usuário de id: ${memberId} já registrado em outro time!`,
          );
      }),
    );

    const team = await this.teamCreateService.execute(createTeamDto);

    const registration: RegistrationTeam = new RegistrationTeam();
    registration.championship = championship;
    registration.team = team;

    const registrationSaved =
      await this.registrationTeamRepository.save(registration);

    return registrationSaved;
  }
}
