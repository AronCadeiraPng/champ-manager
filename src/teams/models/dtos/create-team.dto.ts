import { IsArray, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateTeamDto {
    
    @IsArray()
    membersId: string[];

    @IsString()
    @IsOptional()
    @IsUUID()
    registrationId?: string;
}
