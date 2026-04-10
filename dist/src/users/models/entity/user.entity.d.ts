import { GenderEnum } from "src/common/enums/gender.enum";
import { UserRoles } from "src/common/enums/user-roles.enum";
import { RegistrationSolo } from "src/registrations-solo/models/entity/registration.entity";
import { Timestamp } from "typeorm";
export declare class User {
    id: string;
    name: string;
    email: string;
    cpf: string;
    password: string;
    role: UserRoles;
    gender: GenderEnum;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp;
    registrationsSolo: RegistrationSolo;
}
