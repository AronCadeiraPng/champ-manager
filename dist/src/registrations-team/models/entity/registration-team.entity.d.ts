import { Timestamp } from "typeorm";
import { Team } from "../../../teams/models/entity/team.entity";
import { Participant } from "src/participant/models/entity/participant.entity";
import { Championship } from "src/championships/models/entity/championship.entity";
export declare class RegistrationTeam {
    id: string;
    championshipId: string;
    teamId?: string;
    team: Team[];
    participant?: Participant;
    championship: Championship;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
