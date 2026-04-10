import { IsString, IsUUID } from "class-validator";

export class CreatePlayerDto {
    @IsUUID()
    @IsString()
    registrationId: string;

    @IsUUID()
    @IsString()
    championshipId: string;
}
