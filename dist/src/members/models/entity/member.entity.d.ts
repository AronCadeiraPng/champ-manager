import { Timestamp } from "typeorm";
import { User } from "../../../users/models/entity/user.entity";
import { Team } from "../../../teams/models/entity/team.entity";
export declare class Member {
    id: string;
    teamId?: string;
    userId?: string;
    user?: User;
    team?: Team;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
