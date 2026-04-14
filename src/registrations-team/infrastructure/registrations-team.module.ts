import { Module } from '@nestjs/common';
import { RegistrationsTeamController } from './registrations-team.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistrationTeam } from '../models/entity/registration-team.entity';
import { RegistrationTeamFindService } from '../use-cases/find-registration/find-registration.service';
import { RegistrationsTeamCreateService } from '../use-cases/create-registration/create-registration-team.service';
import { TeamCreateService } from 'src/teams/use-cases/create-team/create-team.service';
import { Team } from 'src/teams/models/entity/team.entity';
import { TeamsModule } from 'src/teams/infrastructure/teams.module';
import { MemberCreateService } from 'src/members/use-cases/create-member/create-member.service';
import { MemberFindService } from 'src/members/use-cases/find-member/find-member.service';
import { Member } from 'src/members/models/entity/member.entity';
import { MembersModule } from 'src/members/infrastructure/members.module';
import { Championship } from 'src/championships/models/entity/championship.entity';
import { ChampionshipFindService } from 'src/championships/use-cases/find-championship/find-championship.service';

@Module({
  imports: [TypeOrmModule.forFeature([RegistrationTeam, Team, Member, Championship]), MembersModule, TeamsModule],
  controllers: [RegistrationsTeamController],
  providers: [
    ChampionshipFindService,
    TeamCreateService,
    RegistrationTeamFindService,
    RegistrationsTeamCreateService,
    MemberCreateService,
    MemberFindService,
    TeamCreateService,
  ],
  exports: [
    RegistrationsTeamModule,
    RegistrationTeamFindService,
    RegistrationsTeamCreateService
  ]
})
export class RegistrationsTeamModule {}
