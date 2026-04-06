import { Module } from '@nestjs/common';
import { SportsController } from './sports.controller';
import { SportCreateService } from '../use-cases/create-sport/create-sport.service';
import { SportFindService } from '../use-cases/find-sport/find-sport.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sport } from '../models/entity/sport.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Sport])
  ],
  controllers: [
    SportsController],
  providers: [
    SportsModule,
    SportCreateService,
    SportFindService,
    SportCreateService,
  ],
})
export class SportsModule {}
