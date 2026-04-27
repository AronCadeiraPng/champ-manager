import { Module } from '@nestjs/common';
import { PhasesController } from './phases.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phase } from '../entity/phase.entity';
import { PhaseCreateService } from '../use-cases/create-phase.service';
import { Championship } from 'src/championships/models/entity/championship.entity';
import { ChampionshipFindService } from 'src/championships/use-cases/find-championship/find-championship.service';
import { RegistrationSolo } from 'src/registrations-solo/models/entity/registration.entity';
import { RegistrationSoloFindService } from 'src/registrations-solo/use-cases/find-registration/find-registration.service';
import { Participant } from 'src/participant/models/entity/participant.entity';
import { ParticipantFindService } from 'src/participant/use-cases/find-participants/find-participants.service';

@Module({
  imports: [TypeOrmModule.forFeature([Phase, Championship, RegistrationSolo, Participant])],
  controllers: [PhasesController],
  providers: [
    PhaseCreateService,
    ChampionshipFindService,
    RegistrationSoloFindService,
    ParticipantFindService
  ],
  exports: [
    PhaseCreateService
  ]
})
export class PhasesModule {}
