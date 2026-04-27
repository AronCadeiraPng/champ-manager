import { Module } from '@nestjs/common';
import { ParticipantController } from './participant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Participant } from '../models/entity/participant.entity';
import { RegistrationSoloModule } from 'src/registrations-solo/infrastructure/registrations.module';
import { RegistrationSoloFindService } from 'src/registrations-solo/use-cases/find-registration/find-registration.service';
import { ParticipantCreateService } from '../use-cases/create-participant/create-participant.service';
import { RegistrationSolo } from 'src/registrations-solo/models/entity/registration.entity';
import { ParticipantFindService } from '../use-cases/find-participants/find-participants.service';
import { Championship } from 'src/championships/models/entity/championship.entity';
import { ChampionshipFindService } from 'src/championships/use-cases/find-championship/find-championship.service';

@Module({
  imports: [TypeOrmModule.forFeature([Participant, RegistrationSolo, Championship]), RegistrationSoloModule],
  controllers: [ParticipantController],
  providers: [
    RegistrationSoloModule,
    ParticipantCreateService,
    ParticipantFindService,
    RegistrationSoloFindService,
    ChampionshipFindService
  ],
  exports: [
    ParticipantModule,
    ParticipantCreateService,
    ParticipantFindService
  ]
  })
export class ParticipantModule {}
