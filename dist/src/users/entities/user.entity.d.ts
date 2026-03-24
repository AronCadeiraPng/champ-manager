import { GenderEnum } from "src/common/enums/gender-enum";
import { UserRoles } from "src/common/enums/user-roles.enum";
import { Registration } from "src/registrations/entities/registration.entity";
import { Team } from "src/teams/entities/team.entity";
import { Timestamp } from "typeorm";
export declare class User {
    id: string;
    name: string;
    email: string;
    cpf: string;
    password: string;
    team: Team;
    role: UserRoles;
    gender: GenderEnum;
    registrations?: Registration[];
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp;
}
