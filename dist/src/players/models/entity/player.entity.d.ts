import { ChampionshipSolo } from "src/championships-solo/models/entity/championship-solo.entity";
import { RegistrationSolo } from "src/registrations-solo/models/entity/registration.entity";
import { Timestamp } from "typeorm";
export declare class Player {
    id: string;
    registrationId: string;
    championshipId: string;
    matchId: string;
    points?: number;
    championship: ChampionshipSolo;
    registration: RegistrationSolo;
    createdAt: Timestamp;
}
