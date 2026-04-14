import { Module } from '@nestjs/common';
import { MembersController } from './members.controller';
import { MemberFindService } from '../use-cases/find-member/find-member.service';
import { MemberCreateService } from '../use-cases/create-member/create-member.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from '../models/entity/member.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Member])],
  controllers: [MembersController],
  providers: [
    MemberFindService,
    MemberCreateService
  ],
  exports: [
    MembersModule,
    MemberCreateService, 
    MemberFindService
  ]
})
export class MembersModule {}