import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateGroupDto {    
    @IsNotEmpty()
    @IsString()
    championshipId: string;

    @IsOptional()
    @IsArray()
    matchesId?: string[];
}