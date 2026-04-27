import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './users/infrastructure/user.module';
import { DataModule } from 'source/data-source';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/models/entity/user.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SportsModule } from './sports/infrastructure/sports.module';
import { UserRegisterService } from './users/use-cases/register-user/user-register.service';
import { RegistrationSoloModule } from './registrations-solo/infrastructure/registrations.module';
import { RegistrationTeam } from './registrations-team/models/entity/registration-team.entity';
import { TeamsModule } from './teams/infrastructure/teams.module';
import { MembersModule } from './members/infrastructure/members.module';
import { RegistrationsTeamModule } from './registrations-team/infrastructure/registrations-team.module';
import { Championship } from './championships/models/entity/championship.entity';
import { ParticipantModule } from './participant/infrastructure/participant.module';
import { MatchesModule } from './matches/infrastructure/matches.module';
import { PhasesModule } from './phases/infrastructure/phases.module';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    DataModule,
    UserModule,
    TypeOrmModule.forFeature([User]),
    AuthModule,
    Championship,
    RegistrationsTeamModule,
    RegistrationSoloModule,
    SportsModule,
    RegistrationTeam,
    TeamsModule,
    MembersModule,
    ParticipantModule,
    MatchesModule,
    PhasesModule,
    PlayersModule,
  ],
  controllers: [],
  providers: [
    AppService,
    UserRegisterService,
    User,
  ],
  exports: [
  ]
})
export class AppModule {}