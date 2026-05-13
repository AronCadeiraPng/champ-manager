import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PhaseEnum } from '../../common/enums/phase-name.enum';
import { PhaseStatusEnum } from '../../common/enums/phase-status.enum';

export class CreatePhaseDto {
    @IsOptional()
    @IsEnum(PhaseEnum)
    @IsString()
    name?: PhaseEnum;

    @IsNotEmpty()
    @IsString()
    championshipId: string;

    @IsOptional()
    @IsEnum(PhaseStatusEnum)
    @IsString()
    status?: PhaseStatusEnum;
}
