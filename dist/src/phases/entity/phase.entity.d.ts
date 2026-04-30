import { Championship } from "src/championships/models/entity/championship.entity";
import { PhaseStatus } from "src/common/enums/phase-status.enum";
import { Match } from "src/matches/models/entity/match.entity";
import { Timestamp } from "typeorm";
export declare class Phase {
    id: string;
    name: string;
    phaseStatus: PhaseStatus;
    championshipId: string;
    championship: Championship;
    matches?: Match[];
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
