import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateRegistrationSoloDto {
    @ApiProperty({ example: 'ab29bfdf-5bbc-4a27-8cd1-fb6b03d5fc4s', description: 'id do usuário' })
    @IsUUID()
    @IsNotEmpty()
    userId: string;
  
    @ApiProperty({ example: 'ab29bfdf-5bbc-4a27-8cd1-fb6b03d5fc4s', description: 'id do torneio' })
    @IsUUID()
    @IsNotEmpty()
    championshipId: string;
}