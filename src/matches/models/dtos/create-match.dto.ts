import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';
import { Player } from '../../../players/models/entity/player.entity';

export class CreateMatchDto {
    @IsOptional()
    @IsString()
    phaseId?: string;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    players?: Player[];
}
