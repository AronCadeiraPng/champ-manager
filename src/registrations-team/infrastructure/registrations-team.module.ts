import { Module } from '@nestjs/common';
import { RegistrationsTeamController } from './registrations-team.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistrationTeam } from '../models/entity/registration-team.entity';
import { RegistrationTeamFindService } from '../use-cases/find-registration/find-registration.service';
import { RegistrationsTeamCreateService } from '../use-cases/create-registration/create-registration-team.service';
import { TeamCreateService } from '../../teams/use-cases/create-team/create-team.service';
import { Team } from '../../teams/models/entity/team.entity';
import { TeamsModule } from '../../teams/infrastructure/teams.module';
import { MemberCreateService } from '../../members/use-cases/create-member/create-member.service';
import { MemberFindService } from '../../members/use-cases/find-member/find-member.service';
import { Member } from '../../members/models/entity/member.entity';
import { MembersModule } from '../../members/infrastructure/members.module';
import { Championship } from '../../championships/models/entity/championship.entity';
import { ChampionshipFindService } from '../../championships/use-cases/find-championship/find-championship.service';
import { UserFindService } from '../../users/use-cases/find-all/find-user.service';
import { User } from '../../users/models/entity/user.entity';
import { TeamFindService } from '../../teams/use-cases/find-team/find-team.service';
import { TeamUpdateService } from '../../teams/use-cases/update-team/update-team.service';
import { RegistrationTeamDeleteService } from '../use-cases/delete-registration/delete-registration.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RegistrationTeam,
      Team,
      Member,
      Championship,
      User,
    ]),
    MembersModule,
    TeamsModule,
  ],
  controllers: [RegistrationsTeamController],
  providers: [
    ChampionshipFindService,
    TeamCreateService,
    RegistrationTeamFindService,
    RegistrationsTeamCreateService,
    RegistrationTeamDeleteService,
    MemberCreateService,
    MemberFindService,
    TeamCreateService,
    TeamFindService,
    TeamUpdateService,
    UserFindService,
  ],
  exports: [
    RegistrationsTeamModule,
    RegistrationTeamFindService,
    RegistrationsTeamCreateService,
  ],
})
export class RegistrationsTeamModule {}
