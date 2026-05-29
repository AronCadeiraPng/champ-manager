import { Module } from "@nestjs/common";
import { Group } from "../models/entity/group.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FindGroupByPhaseService } from "../use-cases/find-by-phase/find-group.service";
import { FindGroupByIdController } from "../use-cases/find-by-id/find-by-id.controller";
import { FindGroupByPhaseController } from "../use-cases/find-by-phase/find-by-phase.controller";
import { UpdateGroupService } from "../use-cases/update/update.service";
import { FindGroupByIdService } from "../use-cases/find-by-id/find-by-id.service";
import { UpdateGroupController } from "../use-cases/update/update.controller";
import { CreateGroupService } from "../use-cases/create/create.service";
import { CreateGroupController } from "../use-cases/create/create.controller";
import { GroupRepository } from "../repository/group.repository";
import { TypeOrmGroupRepository } from "../repository/typeorm-group.repository";
import { JwtService } from "@nestjs/jwt";

@Module({
    imports: [
        TypeOrmModule.forFeature([Group]), 
    ],
    controllers: [
        FindGroupByIdController,
        FindGroupByPhaseController,
        CreateGroupController,
        UpdateGroupController
    ],
    providers: [
        FindGroupByPhaseService,
        UpdateGroupService,
        FindGroupByIdService,
        CreateGroupService,
        JwtService,
        {
          provide: GroupRepository,
          useClass: TypeOrmGroupRepository,
        },
    ],
    exports: []
})

export class GroupsModule {}