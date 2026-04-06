import { ChampionshipSolo } from "src/championships-solo/models/entity/championship-solo.entity";
import { User } from "src/users/models/entity/user.entity";
import { Timestamp } from "typeorm";
export declare class RegistrationSolo {
    id: string;
    userId: string;
    championshipId: string;
    registredAt: Timestamp;
    user: User;
    championship: ChampionshipSolo;
}
