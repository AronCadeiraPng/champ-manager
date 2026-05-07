import { PhaseEnum } from "src/common/enums/phase-name.enum";
import { PhaseStatusEnum } from "src/common/enums/phase-status.enum";
export declare class CreatePhaseDto {
    name?: PhaseEnum;
    championshipId: string;
    status?: PhaseStatusEnum;
}
