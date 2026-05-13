import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class RegistrationTeamListDto {
    @ApiProperty({ example: 'ab29bfdf-5bbc-4a27-8cd1-fb6b03d5fc4s', description: 'id do time' })
    @IsString()
    @IsUUID()
    teamId: string;

    @ApiProperty({ example: 'ab29bfdf-5bbc-4a27-8cd1-fb6b03d5fc4s', description: 'id do campeonato' })
    @IsString()
    @IsUUID()
    championshipId: string;
}
