import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { GenderEnum } from "src/common/enums/gender.enum";
import { ModalityEnum } from "src/common/enums/modality.enum";
import { StatusEnum } from "src/common/enums/championship-status.enum";

export class CreateChampionshipDto {
    @ApiProperty({
        example: 'Sinuca Masculino 2026',
        description: 'Nome do torneio'
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    sportId: string;

    @ApiProperty({
        example: 'masculine',
        description: 'Gênero do torneio'
    })
    @IsString()
    @IsNotEmpty()
    gender: GenderEnum;

    @ApiProperty({
        example: 'solo-game',
        description: 'Modo do torneio (dupla ou sozinho)'
    })
    @IsString()
    @IsNotEmpty()
    modality: ModalityEnum;

    @IsOptional()
    @ApiProperty({
        example: '05/10/2026',
        description: 'Data de início das inscrições'
    })
    @IsDateString()
    registrationStart?: string;   

    @ApiProperty({
        example: '10/05/2026',
        description: 'Data de término das inscrições'
    })
    @IsDateString()
    registrationEnd: string;

    @ApiProperty({
        example: 'in-progress',
        description: 'Status do torneio'
    })
    @IsString()
    @IsNotEmpty()
    status: StatusEnum;
}
