import { IsOptional, IsString } from 'class-validator';

export class CreateParticipantDto {
    @IsString()
    @IsOptional()
    registrationTeamId?: string;
    
    @IsString()
    @IsOptional()
    registrationUserId?: string;
}
