import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistrationSolo } from 'src/registrations-solo/models/entity/registration.entity';
import { RegistrationSoloFindService } from 'src/registrations-solo/use-cases/find-registration/find-registration.service';
import { SportFindService } from 'src/sports/use-cases/find-sport/find-sport.service';
import { Sport } from 'src/sports/models/entity/sport.entity';
import { Championship } from '../models/entity/championship.entity';
import { ChampionshipsController } from './championships.controller';
import { ChampionshipDeleteService } from '../use-cases/delete-championship/delete-championship-solo.service';
import { ChampionshipFindService } from '../use-cases/find-championship/find-championship.service';
import { ChampionshipUpdateService } from '../use-cases/update-championship/update-championship.service';
import { ChampionshipStartService } from '../use-cases/start-championship/start-championship.service';
import { ChampionshipCreateService } from '../use-cases/create-championship/create-championship.service';
import { ParticipantCreateService } from 'src/participant/use-cases/create-participant/create-participant.service';
import { Participant } from 'src/participant/models/entity/participant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Championship, RegistrationSolo, Sport, Participant]) ],
  controllers: [ChampionshipsController],
  providers: [
    Championship,
    ChampionshipCreateService,
    ChampionshipDeleteService,
    ChampionshipFindService,
    ChampionshipUpdateService,
    ChampionshipStartService,
    RegistrationSoloFindService,
    SportFindService,
    ParticipantCreateService
  ],
  exports: [    
    ChampionshipDeleteService,
    ChampionshipFindService,
    ChampionshipUpdateService,
    ChampionshipStartService
  ]
})
export class ChampionshipModule {}
