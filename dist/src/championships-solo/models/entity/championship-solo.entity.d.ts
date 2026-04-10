import { GenderEnum } from "src/common/enums/gender.enum";
import { ModalityEnum } from "src/common/enums/modality.enum";
import { StatusEnum } from "src/common/enums/championship-status.enum";
import { RegistrationSolo } from "src/registrations-solo/models/entity/registration.entity";
import { Sport } from "src/sports/models/entity/sport.entity";
import { Timestamp } from "typeorm";
import { Player } from "src/players/models/entity/player.entity";
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
    players: Player[];
    sport: Sport;
    registrations: RegistrationSolo[];
}
