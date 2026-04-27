import { IsArray, IsEnum, IsString } from "class-validator";
import { PhaseName } from "src/common/enums/phase-name.enum";

export class CreateMatchDto {
    @IsEnum(PhaseName)
    name: PhaseName;

    @IsArray()
    @IsString({ each: true })
    players: { id: string }[];
}
