import { IsArray, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { PhaseEnum } from "../../../_common/enums/phase-name.enum";
import { Match } from "../../../matches/models/entity/match.entity";

export class CreateGroupDto {    
    @IsNotEmpty()
    @IsString()
    championshipId: string;

    @IsEnum(PhaseEnum)
    phase: PhaseEnum;

    @IsOptional()
    @IsArray()
    matchesId?: string[];

    @IsArray()
    matches?: Match[];
}