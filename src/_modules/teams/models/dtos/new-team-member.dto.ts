import { IsString, IsUUID } from 'class-validator';

export default class NewTeamMemberDto {
    @IsString()
    @IsUUID()
    userId: string;
}