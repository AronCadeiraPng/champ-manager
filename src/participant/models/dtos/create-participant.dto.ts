import { IsString } from "class-validator";

export class CreateParticipantDto {
    @IsString()
    registrationTeamId?: string;
    
    @IsString()
    registrationUserId?: string;
}
