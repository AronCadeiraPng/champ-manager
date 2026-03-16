import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class RegisterUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @Transform(({ value }) => value.toLowerCase().trim())
    email: string;

    @IsString()
    @IsNotEmpty()
    cpf: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}