import { Timestamp } from "typeorm";
import { User } from "../../../users/models/entity/user.entity";
import { Team } from "../../../teams/models/entity/team.entity";
export declare class Member {
    id: string;
    teamId?: string;
    userId: string;
    isLeader: boolean;
    user: User;
    team?: Team;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
