import { Module } from '@nestjs/common';
import { TeamsController } from './teams.controller';
import { TeamCreateService } from '../use-cases/create-team/create-team.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from '../models/entity/team.entity';
import { MembersModule } from 'src/members/infrastructure/members.module';
import { MemberCreateService } from 'src/members/use-cases/create-member/create-member.service';
import { Member } from 'src/members/models/entity/member.entity';
import { MemberFindService } from 'src/members/use-cases/find-member/find-member.service';
import { TeamFindService } from '../use-cases/find-team/find-team.service';
import { TeamDeleteService } from '../use-cases/delete-team/delete-team.service';
import { MemberDeleteService } from 'src/members/use-cases/delete-member/delete-member.service';

@Module({
  imports: [TypeOrmModule.forFeature([Team, Member]), TeamsModule, MembersModule],
  controllers: [TeamsController],
  providers: [
    TeamCreateService,
    TeamFindService,
    TeamDeleteService,
    MemberCreateService,
    MemberFindService,
    MemberDeleteService
  ],
  exports: [
    TeamsModule,
    TeamCreateService,
  ]
})
export class TeamsModule {}
