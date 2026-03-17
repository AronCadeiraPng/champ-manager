import { UserRoles } from "src/common/enums/user-roles.enum";
export declare class User {
    id: string;
    name: string;
    email: string;
    cpf: string;
    password: string;
    role: UserRoles;
}
