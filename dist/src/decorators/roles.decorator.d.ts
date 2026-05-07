import { UserRolesEnum } from "src/common/enums/user-roles.enum";
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: UserRolesEnum[]) => import("@nestjs/common").CustomDecorator<string>;
