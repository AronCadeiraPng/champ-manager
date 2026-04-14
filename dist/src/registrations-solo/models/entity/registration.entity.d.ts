import { Timestamp } from "typeorm";
import { User } from "../../../users/models/entity/user.entity";
import { Championship } from "src/championships/models/entity/championship.entity";
import { Participant } from "src/participant/models/entity/participant.entity";
export declare class RegistrationSolo {
    id: string;
    userId: string;
    championshipId: string;
    user: User;
    championship: Championship;
    participant?: Participant;
    registredAt: Timestamp;
    updatedAt: Timestamp;
}
