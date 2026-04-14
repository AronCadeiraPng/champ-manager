import { Timestamp } from "typeorm";
import { RegistrationSolo } from "../../../registrations-solo/models/entity/registration.entity";
import { Championship } from "src/championships/models/entity/championship.entity";
export declare class Player {
    id: string;
    registrationId: string;
    championshipId: string;
    matchId: string;
    points?: number;
    championship: Championship;
    registration: RegistrationSolo;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
