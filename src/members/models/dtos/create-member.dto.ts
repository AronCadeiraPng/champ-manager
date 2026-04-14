import { IsBoolean, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateMemberDto {
    @IsString()
    @IsUUID()
    userId: string;

    @IsString()
    @IsUUID()
    teamId: string;
}
