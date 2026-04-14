import { PartialType } from '@nestjs/swagger';
import { CreateRegistrationsTeamDto } from './create-registrations-team.dto';

export class UpdateRegistrationsTeamDto extends PartialType(CreateRegistrationsTeamDto) {}
