import { GenderEnum } from "src/common/enums/gender-enum";
import { ModalityEnum } from "src/common/enums/modality-enum";
import { StatusEnum } from "src/common/enums/status.enum";
import { RegistrationSolo } from "src/registrations-solo/models/entity/registration.entity";
import { Sport } from "src/sports/models/entity/sport.entity";
import { Timestamp } from "typeorm";
export declare class ChampionshipSolo {
    id: string;
    name: string;
    gender: GenderEnum;
    modality: ModalityEnum;
    registrationStart: Date;
    registrationEnd: Date;
    status: StatusEnum;
    sportId?: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp;
    sport: Sport;
    registration: RegistrationSolo;
}
