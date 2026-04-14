import { Timestamp } from "typeorm";
import { UserRoles } from "../../../common/enums/user-roles.enum";
import { GenderEnum } from "../../../common/enums/gender.enum";
import { RegistrationSolo } from "../../../registrations-solo/models/entity/registration.entity";
import { Team } from "../../../teams/models/entity/team.entity";
export declare class User {
    id: string;
    name: string;
    email: string;
    cpf: string;
    password: string;
    teamId: string;
    role: UserRoles;
    gender: GenderEnum;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp;
    registrationsSolo?: RegistrationSolo;
    team?: Team;
}
