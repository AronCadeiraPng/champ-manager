import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { DataConfig } from './data.config';

config()
@Module({
  imports: [
    TypeOrmModule.forRoot(DataConfig),
  ],
})

export class DataModule {}
