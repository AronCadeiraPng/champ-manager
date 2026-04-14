import { Module } from '@nestjs/common';
import { RegistrationsSoloController } from './registrations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/users/infrastructure/user.module';
import { User } from 'src/users/models/entity/user.entity';
import { RegistrationSoloCreateService } from '../use-cases/create-registration/create-registration.service';
import { RegistrationSoloDeleteService } from '../use-cases/delete-registration/delete-registration.service';
import { RegistrationSoloFindService } from '../use-cases/find-registration/find-registration.service';
import { ChampionshipModule } from 'src/championships/infrastructure/championships.module';
import { Championship } from 'src/championships/models/entity/championship.entity';
import { Participant } from 'src/participant/models/entity/participant.entity';
import { RegistrationSolo } from '../models/entity/registration.entity';
import { UserFindService } from 'src/users/use-cases/find-user/find-user.service';
import { TeamCreateService } from 'src/teams/use-cases/create-team/create-team.service';
import { Team } from 'src/teams/models/entity/team.entity';
import { ChampionshipFindService } from 'src/championships/use-cases/find-championship/find-championship.service';
import { MemberCreateService } from 'src/members/use-cases/create-member/create-member.service';
import { Member } from 'src/members/models/entity/member.entity';
import { MemberFindService } from 'src/members/use-cases/find-member/find-member.service';

@Module({
  imports: [TypeOrmModule.forFeature([RegistrationSolo, Championship, User, Participant, Team, Member]),
    ChampionshipModule,
    UserModule,
  ],
  controllers: [RegistrationsSoloController],
  providers: [
    MemberFindService,
    MemberCreateService,
    ChampionshipFindService,
    UserFindService,
    TeamCreateService,
    RegistrationSoloCreateService,
    RegistrationSoloDeleteService,
    RegistrationSoloFindService,
  ],
  exports: [
    RegistrationSoloModule,
    RegistrationSoloFindService
  ]
})
export class RegistrationSoloModule {}
