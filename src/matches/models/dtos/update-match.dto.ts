import { PartialType } from '@nestjs/swagger';
import { CreateMatchDto } from './create-match.dto';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateMatchDto extends PartialType(CreateMatchDto) {
  @IsNotEmpty()
  @IsString()
  id: string;
}
