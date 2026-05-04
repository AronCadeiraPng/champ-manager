import { IsOptional, IsString } from "class-validator";

export class CreatePlayerDto {
    @IsString()
    matchId: string;

    @IsString()
    participantId: string;
}
