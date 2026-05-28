import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../users/infrastructure/user.module';
import { JwtStrategy } from './strategies/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from '../users/models/entity/user.entity';
import { FindUserByIdService } from '../users/use-cases/find-by-id/find-by-id.service';
import { FindUserByEmailService } from '../users/use-cases/find-by-email/find-by-email.service';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([User]),
    UserModule,
    JwtModule.registerAsync({
      inject: [
        ConfigService
      ],
      useFactory: (
        config: ConfigService
      ) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '60m' },
      }),
    }),
  ],
  providers: [
    AuthService,
    JwtStrategy,
    FindUserByIdService,
    FindUserByEmailService
  ],
  controllers: [
    AuthController
  ],
})
export class AuthModule {}
