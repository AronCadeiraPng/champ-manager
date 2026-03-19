import { SportsEnum } from "src/common/enums/championship-esports.enum";
import { GenderEnum } from "src/common/enums/gender-enum";
import { ModalityEnum } from "src/common/enums/modality-enum";
import { StatusEnum } from "src/common/enums/status.enum";
export declare class CreateChampionshipDto {
    name: string;
    sport: SportsEnum;
    gender: GenderEnum;
    modality: ModalityEnum;
    status: StatusEnum;
}
