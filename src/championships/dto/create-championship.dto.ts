import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { SportsEnum } from "src/common/enums/championship-esports.enum";
import { GenderEnum } from "src/common/enums/gender-enum";
import { ModalityEnum } from "src/common/enums/modality-enum";
import { StatusEnum } from "src/common/enums/status.enum";

export class CreateChampionshipDto {
    @ApiProperty({
        example: 'Sinuca Masculino 2026',
        description: 'Nome do torneio'
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        example: 'Sinuca',
        description: 'Esporte do torneio'
    })
    @IsString()
    @IsNotEmpty()
    sport: SportsEnum;

    @ApiProperty({
        example: 'Masculino',
        description: 'Gênero do torneio'
    })
    @IsString()
    @IsNotEmpty()
    gender: GenderEnum;

    @ApiProperty({
        example: 'Duplas',
        description: 'Modo do torneio (dupla ou sozinho)'
    })
    @IsString()
    @IsNotEmpty()
    modality: ModalityEnum;

    @ApiProperty({
        example: 'Em andamento...',
        description: 'Status do torneio'
    })
    @IsString()
    @IsNotEmpty()
    status: StatusEnum;
}
