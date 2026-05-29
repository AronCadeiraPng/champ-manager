import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';
import { Group } from '../../../groups/models/entity/group.entity';
import { Player } from '../../../players/models/entity/player.entity';

export class CreateMatchDto {
    @IsOptional()
    @IsString()
    groupId?: string;

    @IsOptional()
    @IsString()
    group?: Group;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    players?: Player[];
}