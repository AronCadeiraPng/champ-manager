import { Module } from '@nestjs/common';
import { RegistrationsSoloController } from './registrations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/users/infrastructure/user.module';
import { User } from 'src/users/models/entity/user.entity';
import { RegistrationSolo } from '../models/entity/registration.entity';
import { ChampionshipSolo } from 'src/championships-solo/models/entity/championship-solo.entity';
import { ChampionshipSoloModule } from 'src/championships-solo/infrastructure/championships-solo.module';
import { RegistrationSoloCreateService } from '../use-cases/create-registration/create-registration.service';
import { RegistrationSoloDeleteService } from '../use-cases/delete-registration/delete-registration.service';
import { RegistrationSoloFindService } from '../use-cases/find-registration/find-registration.service';

@Module({
  imports: [TypeOrmModule.forFeature([
    RegistrationSolo,
    ChampionshipSolo,
    User
  ]), 
    ChampionshipSoloModule,
    UserModule
  ],
  controllers: [RegistrationsSoloController],
  providers: [
    RegistrationSoloCreateService,
    RegistrationSoloDeleteService,
    RegistrationSoloFindService
  ],
  exports: [RegistrationSoloModule]
})
export class RegistrationSoloModule {}
