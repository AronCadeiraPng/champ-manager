import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from '../models/entity/group.entity';
import { FindGroupByIdService } from '../use-cases/find-by-id/find-by-id.service';
import { CreateGroupService } from '../use-cases/create-group/create-group.service';
import { GroupRepository } from '../repository/group.repository';
import { TypeOrmGroupRepository } from '../repository/typeorm-group.repository';
import { Championship } from '../../championships/models/entity/championship.entity';
import { ChampionshipFindService } from '../../championships/use-cases/find-championship/find-championship.service';
import { FindGroupByPhaseService } from '../use-cases/find-by-phase/find-group.service';
import { FindGroupByPhaseController } from '../use-cases/find-by-phase/find-by-phase.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
    imports: [
        TypeOrmModule.forFeature([Group, Championship]),
    ],
    controllers: [
        FindGroupByPhaseController
    ],
    providers: [
        FindGroupByIdService,
        JwtService,
        CreateGroupService,
        FindGroupByPhaseService,
        ChampionshipFindService,
        {
          provide: GroupRepository,
          useClass: TypeOrmGroupRepository,
        },
    ],
    exports: [
        FindGroupByIdService,
        CreateGroupService
    ]
})
export class GroupsModule {}
