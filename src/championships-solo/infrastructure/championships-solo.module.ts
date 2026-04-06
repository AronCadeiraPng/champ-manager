import { Module } from '@nestjs/common';
import { ChampionshipsController } from './championships-solo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChampionshipSolo } from '../models/entity/championship-solo.entity';
import { ChampionshipSoloCreateService } from '../use-cases/create-championship/create-championship-solo.service';
import { ChampionshipSoloDeleteService } from '../use-cases/delete-championship/delete-championship-solo.service';
import { ChampionshipSoloFindService } from '../use-cases/find-championship/find-championship-solo.service';
import { ChampionshipSoloUpdateService } from '../use-cases/update-championship/update-championship-solo.service';
import { RegistrationSolo } from 'src/registrations-solo/models/entity/registration.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChampionshipSolo, RegistrationSolo])],
  controllers: [ChampionshipsController],
  providers: [
    ChampionshipSolo,
    ChampionshipSoloCreateService,
    ChampionshipSoloDeleteService,
    ChampionshipSoloFindService,
    ChampionshipSoloUpdateService
  ],
  exports: [    
    ChampionshipSoloCreateService,
    ChampionshipSoloDeleteService,
    ChampionshipSoloFindService,
    ChampionshipSoloUpdateService
  ]
})
export class ChampionshipSoloModule {}
