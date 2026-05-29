import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "../_modules/users/infrastructure/user.module";
import { User } from "../_modules/users/models/entity/user.entity";
import { FindUserByEmailService } from "../_modules/users/use-cases/find-by-email/find-by-email.service";
import { FindUserByIdService } from "../_modules/users/use-cases/find-by-id/find-by-id.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./strategies/jwt.strategy";

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
