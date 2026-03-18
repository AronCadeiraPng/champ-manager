import { UserRoles } from "src/common/enums/user-roles.enum";
import { Timestamp } from "typeorm";
export declare class User {
    id: string;
    name: string;
    email: string;
    cpf: string;
    password: string;
    role: UserRoles;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp;
}
