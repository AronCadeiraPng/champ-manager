import { PhaseEnum } from "../../_common/enums/phase-name.enum";
import { UpdateGroupDto } from "../models/dtos/update-group.dto";
import { Group } from "../models/entity/group.entity";

export abstract class GroupRepository {
  abstract save(group: Group): Promise<Group>;
  abstract createAndSave(groupDto: Partial<Group>): Promise<Group>;
  abstract findAll(): Promise<Group[]>;
  abstract findById(id: string): Promise<Group | null>;
  abstract findByPhase(championshipId: string, phase: PhaseEnum): Promise<Group | null>;
  abstract update(updateGroupDto: UpdateGroupDto, id: string);
}