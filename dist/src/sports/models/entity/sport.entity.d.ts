import { Championship } from "src/championships/models/entity/championship.entity";
import { Timestamp } from "typeorm";
export declare class Sport {
    id: string;
    name: string;
    deleted?: boolean;
    championship: Championship;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
