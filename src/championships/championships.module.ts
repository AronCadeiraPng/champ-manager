import { Module } from '@nestjs/common';
import { ChampionshipsService } from './championships.service';
import { ChampionshipsController } from './championships.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Championship } from './entities/championship.entity';
import { Registration } from 'src/registrations/entities/registration.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Championship, Registration])],
  controllers: [ChampionshipsController],
  providers: [Championship, ChampionshipsService],
  exports: [ChampionshipsService]
})
export class ChampionshipsModule {}
