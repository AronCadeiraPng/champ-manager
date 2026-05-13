import { IsString, IsUUID } from 'class-validator';

export class CreateRegistrationsTeamDto {
    @IsString()
    @IsUUID()
    teamId: string;

    @IsString()
    @IsUUID()
    championshipId: string;
}
