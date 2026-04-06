import { GenderEnum } from "src/common/enums/gender-enum";
import { ModalityEnum } from "src/common/enums/modality-enum";
import { StatusEnum } from "src/common/enums/status.enum";
export declare class CreateChampionshipSoloDto {
    name: string;
    sportId: string;
    gender: GenderEnum;
    modality: ModalityEnum;
    registrationStart?: string;
    registrationEnd: string;
    status: StatusEnum;
}
