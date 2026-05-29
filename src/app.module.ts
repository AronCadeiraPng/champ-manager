import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ScheduleModule } from "@nestjs/schedule";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostgresChampConfigService } from "./_database/providers/data.config";
import { Championship } from "./_modules/championships/models/entity/championship.entity";
import { User } from "./_modules/users/models/entity/user.entity";
import { UserModule } from "./_modules/users/infrastructure/user.module";
import { APP_GUARD } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { ChampionshipSchedulerService } from "./_modules/championships/use-cases/schedule/championship-schedule.service";
import { MatchesModule } from "./_modules/matches/infrastructure/matches.module";
import { MembersModule } from "./_modules/members/infrastructure/members.module";
import { ParticipantModule } from "./_modules/participant/infrastructure/participant.module";
import { PlayersModule } from "./_modules/players/infrastructure/players.module";
import { RegistrationSoloModule } from "./_modules/registrations-solo/infrastructure/registrations.module";
import { RegistrationsTeamModule } from "./_modules/registrations-team/infrastructure/registrations-team.module";
import { RegistrationTeam } from "./_modules/registrations-team/models/entity/registration-team.entity";
import { SportsModule } from "./_modules/sports/infrastructure/sports.module";
import { TeamsModule } from "./_modules/teams/infrastructure/teams.module";
import { TypeOrmUserRepository } from "./_modules/users/repository/typeorm-user.repository";
import { UserRepository } from "./_modules/users/repository/user.repository";
import { FindUserByIdService } from "./_modules/users/use-cases/find-by-id/find-by-id.service";
import { UserRegisterService } from "./_modules/users/use-cases/register/user-register.service";
import { AuthModule } from "./auth/auth.module";
import { JwtAuthGuard } from "./auth/guards/jwt-auth.guard";
import { GroupsModule } from "./_modules/groups/infrastructure/group.module";
import { FindUserByEmailService } from "./_modules/users/use-cases/find-by-email/find-by-email.service";
import { FindUserByCpfService } from "./_modules/users/use-cases/find-by-cpf/find-by-cpf.service";


@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass:  PostgresChampConfigService,
    }),
    UserModule,
    TypeOrmModule.forFeature([User, Championship]),
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
    GroupsModule,
  ],
  controllers: [

  ],
  providers: [
    ChampionshipSchedulerService,
    UserRegisterService,
    FindUserByIdService,
    FindUserByEmailService,
    FindUserByCpfService,
    User,
    {
      provide: UserRepository,
      useClass: TypeOrmUserRepository,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    JwtService
  ],
  exports: [
  ],
})
export class AppModule { }
