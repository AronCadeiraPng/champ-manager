import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from '../models/entity/group.entity';
import { GroupFindService } from '../use-cases/find-group/find-group.service';
import { GroupCreateService } from '../use-cases/create-group/create-group.service';
import { GroupController } from './groups.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Group]),
    ],
    controllers: [
        GroupController
    ],
    providers: [
        GroupFindService,
        GroupCreateService
    ],
    exports: [
        GroupFindService,
        GroupCreateService 
    ]
})
export class GroupsModule {}
