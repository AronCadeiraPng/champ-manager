import { Module } from '@nestjs/common';
import { RegistrationsService } from './registrations.service';
import { RegistrationsController } from './registrations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registration } from './entities/registration.entity';
import { ChampionshipsModule } from 'src/championships/championships.module';
import { Championship } from 'src/championships/entities/championship.entity';
import { UserModule } from 'src/users/user.module';
import { User } from 'src/users/entities/user.entity';
import { UserService } from 'src/users/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([
    Registration,
    Championship,
    User
  ]), 
    ChampionshipsModule,
    UserModule
  ],
  controllers: [RegistrationsController],
  providers: [RegistrationsService, UserService],
  exports: [RegistrationsModule]
})
export class RegistrationsModule {}
