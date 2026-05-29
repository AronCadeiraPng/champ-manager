import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RegistrationSolo } from "../../_modules/registrations-solo/models/entity/registration.entity";
import { User } from "../../_modules/users/models/entity/user.entity";
import { Seeder } from "./seeder";
import { SeedUserService } from "./entities/users/user.seeder";
import { SeedRegistrationService } from "./entities/registrations/registration.seeder";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            entities: [__dirname + '/../../**/*.entity.{js,ts}'],
            synchronize: process.env.DB_SYNCHRONIZE === 'true',
            autoLoadEntities: true,
        }),

        TypeOrmModule.forFeature([User, RegistrationSolo]),
    ],
    providers: [
        Seeder,
        SeedUserService,
        SeedRegistrationService
    ],
    exports: [Seeder]
})
export class SeederModule { }