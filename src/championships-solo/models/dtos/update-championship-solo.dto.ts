import { PartialType } from '@nestjs/swagger';
import { CreateChampionshipSoloDto } from './create-championship-solo.dto';

export class UpdateChampionshipSoloDto extends PartialType(CreateChampionshipSoloDto) {}
