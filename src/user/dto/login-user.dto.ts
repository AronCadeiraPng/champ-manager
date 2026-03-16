import { Transform } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class LoginUserDto {
    @IsString()
    @IsNotEmpty()
    @Transform(({ value }) => value.toLowerCase().trim())
    account: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}