import { IsString, IsUUID } from "class-validator";

export class CreateSportDto {
    @IsString()
    name: string;
}
