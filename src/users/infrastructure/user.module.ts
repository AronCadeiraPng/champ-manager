import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../models/entity/user.entity';
import { UserFindService } from '../use-cases/find-user/find-user.service';
import { UserLoginService } from '../use-cases/login-user/login-user.service';
import { UserRegisterService } from '../use-cases/register-user/user-register.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserFindService, UserLoginService, UserRegisterService],
  exports: [UserModule, UserFindService, UserLoginService, UserRegisterService],
})
export class UserModule {}
