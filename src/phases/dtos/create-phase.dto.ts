import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { PhaseName } from "src/common/enums/phase-name.enum";
import { PhaseStatus } from "src/common/enums/phase-status.enum";

export class CreatePhaseDto {
    @IsOptional()
    @IsEnum(PhaseName)
    @IsString()
    name?: PhaseName;

    @IsNotEmpty()
    @IsString()
    championshipId: string;

    @IsOptional()
    @IsEnum(PhaseStatus)
    @IsString()
    phaseStatus?: PhaseStatus;
}