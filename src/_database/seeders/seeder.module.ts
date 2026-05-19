import "dotenv/config";

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Seeder } from "./seeder";
import { User } from "../../users/models/entity/user.entity";
import { SeedUserService } from "./entities/users/user.seeder";

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

        TypeOrmModule.forFeature([User]),
    ],
    providers: [
        Seeder,
        SeedUserService,
    ],
    exports: [Seeder]
})
export class SeederModule { }