import { Module } from '@nestjs/common';
import { ChampionshipsService } from './championships.service';
import { ChampionshipsController } from './championships.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Championship } from './entities/championship.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Championship])],
  controllers: [ChampionshipsController],
  providers: [Championship, ChampionshipsService],
  exports: [ChampionshipsService]
})
export class ChampionshipsModule {}
