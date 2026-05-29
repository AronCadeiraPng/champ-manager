import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult } from "typeorm";
import { Group } from "../models/entity/group.entity";
import { GroupRepository } from "./group.repository";
import { PhaseEnum } from "../../../_common/enums/phase-name.enum";

@Injectable()
export class TypeOrmGroupRepository implements GroupRepository {
    constructor(
        @InjectRepository(Group)
        private readonly repository: Repository<Group>
    ) { }

    async save(group: Group): Promise<Group> {
        return await this.repository.save(group);
    }
    
    async createAndSave(GroupDto: Partial<Group>): Promise<Group> {
        return await this.repository.save(GroupDto);
    }

    async findAll(): Promise<Group[]> {
        return await this.repository.find({
            relations: {
                matches: true
            }
        })
    }

    async findById(id: string) {
        return await this.repository.findOne({ where: { id } });
    }

    async findByPhase(championshipId: string, phase: PhaseEnum): Promise<Group | null> {
        return await this.repository.findOne({
            where: {
                championshipId: championshipId,
                phase: phase
            }
        })

    }

    async update(updateGroupDto, id: string): Promise<UpdateResult> {
        return await this.repository.update(id, updateGroupDto);
    }
}