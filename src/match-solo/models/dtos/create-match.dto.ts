import { IsString, IsUUID } from "class-validator";

export class CreateMatchDto {
    @IsUUID()
    @IsString()
    championshipId: string;

    @IsUUID()
    @IsString()
    playerId: string;    
}
