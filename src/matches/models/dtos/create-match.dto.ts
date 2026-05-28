import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';
import { Player } from '../../../players/models/entity/player.entity';
import { Group } from '../../../groups/models/entity/group.entity';

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