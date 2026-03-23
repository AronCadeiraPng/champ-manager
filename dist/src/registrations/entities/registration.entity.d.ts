import { Championship } from "src/championships/entities/championship.entity";
import { User } from "src/users/entities/user.entity";
import { Timestamp } from "typeorm";
export declare class Registration {
    id: string;
    userId: string;
    championshipId: string;
    user: User;
    championship: Championship;
    registredAt: Timestamp;
}
