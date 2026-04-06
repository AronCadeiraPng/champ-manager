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
import { ChampionshipSoloModule } from './championships-solo/infrastructure/championships-solo.module';
import { RegistrationSoloModule } from './registrations-solo/infrastructure/registrations.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DataModule,
    UserModule,
    TypeOrmModule.forFeature([User]),
    AuthModule,
    ChampionshipSoloModule,
    RegistrationSoloModule,
    SportsModule,
  ],
  controllers: [],
  providers: [
    AppService,
    UserRegisterService,
    User
  ],
})
export class AppModule {}