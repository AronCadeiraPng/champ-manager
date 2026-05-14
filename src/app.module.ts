import { Module } from '@nestjs/common';
import { UserModule } from './users/infrastructure/user.module';
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
import { PlayersModule } from './players/infrastructure/players.module';

import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { PostgresChampConfigService } from './db-config/data.config';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresChampConfigService,
    }),
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
    PlayersModule,

  ],
  controllers: [
    
  ],
  providers: [
    UserRegisterService,
    User,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    JwtService
  ],
  exports: [],
})
export class AppModule {}
