import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsDateString, IsOptional } from "class-validator";
import { ChampionshipStatusEnum } from "../../../../_common/enums/championship-status.enum";
import { GenderEnum } from "../../../../_common/enums/gender.enum";
import { ModalityEnum } from "../../../../_common/enums/modality.enum";


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

    @ApiProperty({ example: 'in-progress', description: 'Status do torneio', default: ChampionshipStatusEnum.REGISTRATION_OPEN })
    @IsOptional()
    @IsString()
    status: ChampionshipStatusEnum;
}
