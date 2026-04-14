import { Module } from '@nestjs/common';
import { SportsController } from './sports.controller';
import { RegistrationSoloModule } from 'src/registrations-solo/infrastructure/registrations.module';
import { SportFindService } from '../use-cases/find-sport/find-sport.service';
import { SportCreateService } from '../use-cases/create-sport/create-sport.service';
import { SportDeleteService } from '../use-cases/delete-sport/delete-sport.service';
import { SportUpdateService } from '../use-cases/update-sport/update-sport.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sport } from '../models/entity/sport.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sport]), RegistrationSoloModule],
  controllers: [SportsController],
  providers: [
    SportFindService,
    SportCreateService,
    SportDeleteService,
    SportUpdateService
  ],
  exports: [
    SportsModule,
    SportFindService
  ]
})
export class SportsModule {}
