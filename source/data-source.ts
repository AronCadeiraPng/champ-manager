import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { Championship } from 'src/championships/entities/championship.entity';
import { Registration } from 'src/registrations/entities/registration.entity';
import { User } from 'src/users/entities/user.entity';

config()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [User, Championship, Registration],
      synchronize: true,
    }),
  ],
})

export class DataModule {}
