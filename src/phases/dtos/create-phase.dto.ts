import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { PhaseName } from "src/common/enums/phase-name.enum";
import { PhaseStatusEnum } from "src/common/enums/phase-status.enum";

export class CreatePhaseDto {
    @IsEnum(PhaseName)
    @IsString()
    name: PhaseName;

    @IsNotEmpty()
    @IsString()
    championshipId: string;

    @IsEnum(PhaseStatusEnum)
    @IsString()
    phaseStatus: PhaseStatusEnum;
}
