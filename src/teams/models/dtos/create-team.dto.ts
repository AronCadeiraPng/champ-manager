import { IsOptional, IsString, IsUUID } from "class-validator";

export class CreateTeamDto {
    @IsString()
    @IsUUID()
    @IsOptional()
    membersId?: string[];

    @IsString()
    @IsOptional()
    @IsUUID()
    registrationId?: string;
}
