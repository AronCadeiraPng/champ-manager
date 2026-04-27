import { Championship } from "src/championships/models/entity/championship.entity";
import { Timestamp } from "typeorm";
export declare class Phase {
    id: string;
    name: string;
    championshipId: string;
    championship: Championship;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
