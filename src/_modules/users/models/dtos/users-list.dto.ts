import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsIn, IsNotEmpty, IsString } from 'class-validator';
import { GenderEnum } from '../../../../_common/enums/gender.enum';

export class UsersListDto {
    @ApiProperty({ example: 'Gabriel', description: 'Nome do usuário' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: 'masculine',description: 'Gênero do usuário' })
    @IsIn(['masculine', 'feminine'])
    @IsString()
    @IsNotEmpty()
    gender: GenderEnum;

    @ApiProperty({ example: 'Gabriel@gmail.com', description: 'Email do usuário' })
    @IsString()
    @IsEmail({}, {message: 'Email inválido!'})
    @IsNotEmpty()
    @Transform(({ value }) => value.toLowerCase().trim())
    email: string;

    @ApiProperty({ example: '100.100.100-10', description: 'CPF do usuário' })
    @IsString({message: 'Cpf inválido!'})
    @IsNotEmpty()
    cpf: string;
}