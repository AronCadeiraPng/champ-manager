import { GenderEnum } from "src/common/enums/gender-enum";
export declare class RegisterUserDto {
    name: string;
    gender: GenderEnum;
    email: string;
    cpf: string;
    password: string;
}
