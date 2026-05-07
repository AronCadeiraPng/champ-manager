import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { GenderEnum } from "src/common/enums/gender.enum";
import { ModalityEnum } from "src/common/enums/modality.enum";
import { ChampionshipStatusEnum } from "src/common/enums/championship-status.enum";
import { Transform } from "class-transformer";

export class CreateChampionshipDto {
    @ApiProperty({ example: 'Sinuca Masculino 2026', description: 'Nome do torneio' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: 'ab29bfdf-5bbc-4a27-8cd1-fb6b03d5fc4s', description: 'id do esporte' })
    @IsString()
    @IsNotEmpty()
    sportId: string;

    @ApiProperty({ example: 'masculine', description: 'Gênero do torneio' })
    @IsString()
    @IsNotEmpty()
    gender: GenderEnum;

    @ApiProperty({ example: 'solo-game', description: 'Modo do torneio (dupla ou sozinho)' })
    @IsString()
    @IsNotEmpty()
    modality: ModalityEnum;

    @ApiProperty({ example: '05/10/2026', description: 'Data de início das inscrições' })
    @IsNotEmpty({ message: 'Escolha uma data para o início das inscrições' })
    @IsDateString()
    registrationStart: string;   

    @ApiProperty({ example: '10/05/2026', description: 'Data de término das inscrições' })
    @IsOptional()
    @IsDateString()
    registrationEnd?: string;

    @ApiProperty({ example: 'in-progress', description: 'Status do torneio', default: ChampionshipStatusEnum.REGISTRATION_START })
    @IsOptional()
    @IsString()
    status: ChampionshipStatusEnum;
}
