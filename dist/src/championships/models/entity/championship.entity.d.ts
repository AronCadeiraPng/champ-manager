import { Timestamp } from "typeorm";
import { GenderEnum } from "../../../common/enums/gender.enum";
import { ModalityEnum } from "../../../common/enums/modality.enum";
import { StatusEnum } from "../../../common/enums/championship-status.enum";
import { Player } from "../../../players/models/entity/player.entity";
import { Sport } from "../../../sports/models/entity/sport.entity";
import { RegistrationSolo } from "../../../registrations-solo/models/entity/registration.entity";
export declare class Championship {
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
    players: Player[];
    sport: Sport;
    registrations: RegistrationSolo[];
}
