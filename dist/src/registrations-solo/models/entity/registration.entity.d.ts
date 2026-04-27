import { Timestamp } from "typeorm";
import { User } from "../../../users/models/entity/user.entity";
import { Championship } from "../../../championships/models/entity/championship.entity";
import { Participant } from "../../../participant/models/entity/participant.entity";
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
