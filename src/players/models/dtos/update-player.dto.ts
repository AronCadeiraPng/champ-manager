import { PartialType } from '@nestjs/swagger';
import { CreatePlayerDto } from './create-player.dto';
import { IsNumber, IsOptional } from 'class-validator';

export class UpdatePlayerDto extends PartialType(CreatePlayerDto) {
    @IsOptional()
    @IsNumber()
    points: number;
}
