import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { DataModule } from 'source/data-source';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { ChampionshipsModule } from './championships/championships.module';

@Module({
  imports: [DataModule, UserModule, TypeOrmModule.forFeature([User]), AuthModule, ChampionshipsModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
