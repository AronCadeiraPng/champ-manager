import { Module } from '@nestjs/common';
import { MembersController } from './members.controller';
import { MemberFindService } from '../use-cases/find-member/find-member.service';
import { MemberCreateService } from '../use-cases/create-member/create-member.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from '../models/entity/member.entity';
import { MemberDeleteService } from '../use-cases/delete-member/delete-member.service';

@Module({
  imports: [TypeOrmModule.forFeature([Member])],
  controllers: [MembersController],
  providers: [MemberFindService, MemberCreateService, MemberDeleteService],
  exports: [
    MembersModule,
    MemberCreateService,
    MemberFindService,
    MemberDeleteService,
  ],
})
export class MembersModule {}
