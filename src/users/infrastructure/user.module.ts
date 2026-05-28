import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../models/entity/user.entity';
import { UserLoginService } from '../use-cases/login/login-user.service';
import { UserRegisterService } from '../use-cases/register/user-register.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';
import { FindUserByIdController } from '../use-cases/find-by-id/find-by-id.controller';
import { FindUserByIdService } from '../use-cases/find-by-id/find-by-id.service';
import { TypeOrmUserRepository } from '../repository/typeorm-user.repository';
import { UserRepository } from '../repository/user.repository';
import { FindAllUserController } from '../use-cases/find-all/find-all.controller';
import { FindAllUserService } from '../use-cases/find-all/find-all.service';
import { FindUserByCpfService } from '../use-cases/find-by-cpf/find-by-cpf.service';
import { FindUserByEmailService } from '../use-cases/find-by-email/find-by-email.service';
import { FindUserByCpfController } from '../use-cases/find-by-cpf/find-by-cpf.controller';
import { FindUserByEmailController } from '../use-cases/find-by-email/find-by-email.controller';
import { GetUserInfoController } from '../use-cases/get-info/get-info.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],

  providers: [
    UserLoginService,
    UserRegisterService,
    JwtAuthGuard,
    JwtService,
    FindUserByIdService,
    FindAllUserService,
    FindUserByCpfService,
    FindUserByEmailService,
    {
      provide: UserRepository,
      useClass: TypeOrmUserRepository,
    },
  ],

  controllers: [
    FindAllUserController,
    FindUserByIdController,
    FindUserByCpfController,
    FindUserByEmailController,
    GetUserInfoController
  ],

  exports: [
    UserLoginService,
    UserRegisterService,
    UserRepository,
  ],
})

export class UserModule {}