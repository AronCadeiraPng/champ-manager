import { Timestamp } from "typeorm";
import { GenderEnum } from "../../../common/enums/gender.enum";
import { ModalityEnum } from "../../../common/enums/modality.enum";
import { ChampionshipStatusEnum } from "../../../common/enums/championship-status.enum";
import { Sport } from "../../../sports/models/entity/sport.entity";
import { RegistrationSolo } from "../../../registrations-solo/models/entity/registration.entity";
import { RegistrationTeam } from "src/registrations-team/models/entity/registration-team.entity";
import { Phase } from "src/phases/entity/phase.entity";
export declare class Championship {
    id: string;
    name: string;
    gender: GenderEnum;
    modality: ModalityEnum;
    registrationStart: Date;
    registrationEnd: Date;
    status: ChampionshipStatusEnum;
    sportId?: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp;
    sport: Sport;
    registrationsSolo: RegistrationSolo[];
    registrationsTeam: RegistrationTeam[];
    phases: Phase[];
}
