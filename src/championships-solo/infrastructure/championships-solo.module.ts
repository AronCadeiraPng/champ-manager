import { Module } from '@nestjs/common';
import { ChampionshipsController } from './championships-solo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChampionshipSolo } from '../models/entity/championship-solo.entity';
import { ChampionshipSoloCreateService } from '../use-cases/create-championship/create-championship-solo.service';
import { ChampionshipSoloDeleteService } from '../use-cases/delete-championship/delete-championship-solo.service';
import { ChampionshipSoloFindService } from '../use-cases/find-championship/find-championship-solo.service';
import { ChampionshipSoloUpdateService } from '../use-cases/update-championship/update-championship-solo.service';
import { RegistrationSolo } from 'src/registrations-solo/models/entity/registration.entity';
import { ChampionshipStartService } from '../use-cases/start-championship/start-championship.service';
import { PlayerCreateService } from 'src/players/use-cases/create-player/create-player.service';
import { PlayersModule } from 'src/players/infrastructure/players.module';
import { RegistrationSoloFindService } from 'src/registrations-solo/use-cases/find-registration/find-registration.service';
import { PlayerFindService } from 'src/players/use-cases/find-player/find-player.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChampionshipSolo, RegistrationSolo]), PlayersModule],
  controllers: [ChampionshipsController],
  providers: [
    ChampionshipSolo,
    ChampionshipSoloCreateService,
    ChampionshipSoloDeleteService,
    ChampionshipSoloFindService,
    ChampionshipSoloUpdateService,
    ChampionshipStartService,
    PlayerCreateService,
    PlayerFindService,
    PlayersModule,
    RegistrationSoloFindService
  ],
  exports: [    
    ChampionshipSoloCreateService,
    ChampionshipSoloDeleteService,
    ChampionshipSoloFindService,
    ChampionshipSoloUpdateService,
    ChampionshipStartService
  ]
})
export class ChampionshipSoloModule {}
