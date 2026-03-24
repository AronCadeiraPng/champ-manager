import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class FindChampionshipDto {
    @ApiProperty({
        example: 'Sinuca Masculino 2026',
        description: 'Nome do torneio'
    })
    @IsString()
    @IsNotEmpty()
    name: string;
}