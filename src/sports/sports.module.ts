import { Module } from '@nestjs/common';
import { SportsController } from './infrastructure/sports.controller';
import { RegistrationSoloModule } from 'src/registrations-solo/infrastructure/registrations.module';
import { SportFindService } from './use-cases/find-sport/find-sport.service';
import { SportCreateService } from './use-cases/create-sport/create-sport.service';

@Module({
  controllers: [SportsController],
  providers: [
    RegistrationSoloModule,
    SportFindService,
    SportCreateService,
  ],
})
export class SportsModule {}
