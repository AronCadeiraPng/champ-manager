import { UserRoles } from "src/common/enums/user-roles.enum";
import { Registration } from "src/registrations/entities/registration.entity";
import { Timestamp } from "typeorm";
export declare class User {
    id: string;
    name: string;
    email: string;
    cpf: string;
    password: string;
    role: UserRoles;
    registrations?: Registration[];
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp;
}
