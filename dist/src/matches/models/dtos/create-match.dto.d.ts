import { PhaseName } from "src/common/enums/phase-name.enum";
export declare class CreateMatchDto {
    name: PhaseName;
    participants: {
        id: string;
    }[];
}
