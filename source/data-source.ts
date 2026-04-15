import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { Championship } from 'src/championships/models/entity/championship.entity';
import { Member } from 'src/members/models/entity/member.entity';
import { Participant } from 'src/participant/models/entity/participant.entity';
import { RegistrationSolo } from 'src/registrations-solo/models/entity/registration.entity';
import { RegistrationTeam } from 'src/registrations-team/models/entity/registration-team.entity';
import { Sport } from 'src/sports/models/entity/sport.entity';
import { Team } from 'src/teams/models/entity/team.entity';
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
      entities: [User, RegistrationSolo, RegistrationTeam, Championship, Sport, Team, Member, Participant],
      synchronize: true,
    }),
  ],
})

export class DataModule {}
