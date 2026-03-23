import { SportsEnum } from "src/common/enums/championship-esports.enum";
import { GenderEnum } from "src/common/enums/gender-enum";
import { ModalityEnum } from "src/common/enums/modality-enum";
import { StatusEnum } from "src/common/enums/status.enum";
import { Registration } from "src/registrations/entities/registration.entity";
import { Timestamp } from "typeorm";
export declare class Championship {
    id: string;
    name: string;
    sport: SportsEnum;
    gender: GenderEnum;
    modality: ModalityEnum;
    status: StatusEnum;
    registrations: Registration[];
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp;
}
