import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { ChampionshipSolo } from 'src/championships-solo/models/entity/championship-solo.entity';
import { RegistrationSolo } from 'src/registrations-solo/models/entity/registration.entity';
import { Sport } from 'src/sports/models/entity/sport.entity';
import { User } from 'src/users/models/entity/user.entity';

config()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [User, RegistrationSolo, ChampionshipSolo, Sport],
      synchronize: true,
    }),
  ],
})

export class DataModule {}
