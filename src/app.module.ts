import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { DataModule } from 'source/data-source';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { ChampionshipsModule } from './championships/championships.module';
import { ConfigModule } from '@nestjs/config';
import { RegistrationsModule } from './registrations/registrations.module';
import { TeamsModule } from './teams/teams.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DataModule,
    UserModule,
    TypeOrmModule.forFeature([User]),
    AuthModule,
    ChampionshipsModule,
    RegistrationsModule,
    TeamsModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}