import { RegisterUserDto } from "./register-user.dto";
import { UserRoles } from "src/common/enums/user-roles.enum";
declare const UpdateUserDto_base: import("@nestjs/common").Type<Partial<RegisterUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    role?: UserRoles;
}
export {};
