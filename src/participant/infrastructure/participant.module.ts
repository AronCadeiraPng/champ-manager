import { Module } from '@nestjs/common';
import { ParticipantController } from './participant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Participant } from '../models/entity/participant.entity';
import { RegistrationSoloModule } from 'src/registrations-solo/infrastructure/registrations.module';
import { RegistrationSoloFindService } from 'src/registrations-solo/use-cases/find-registration/find-registration.service';
import { ParticipantCreateService } from '../use-cases/create-participant/create-participant.service';
import { RegistrationSolo } from 'src/registrations-solo/models/entity/registration.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Participant, RegistrationSolo]), RegistrationSoloModule],
  controllers: [ParticipantController],
  providers: [
    RegistrationSoloModule,
    ParticipantCreateService,
    RegistrationSoloFindService
  ],
  exports: [
    ParticipantModule,
    ParticipantCreateService
  ]
  })
export class ParticipantModule {}
