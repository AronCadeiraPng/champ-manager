import { PhaseName } from "src/common/enums/phase-name.enum";
import { PhaseStatus } from "src/common/enums/phase-status.enum";
export declare class CreatePhaseDto {
    name?: PhaseName;
    championshipId: string;
    phaseStatus?: PhaseStatus;
}
