import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { GenderEnum } from '../../../common/enums/gender.enum';

export class RegisterUserDto {
    @ApiProperty({
      example: 'Gabriel',
      description: 'Nome do usuário',
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
      example: 'masculine',
      description: 'Gênero do usuário',
    })
    @IsOptional()
    @IsString()
    gender?: GenderEnum;

    @ApiProperty({
      example: 'Gabriel@gmail.com',
      description: 'Email do usuário',
    })
    @IsString()
    @IsEmail({}, {message: 'Email inválido!'})
    @IsNotEmpty()
    @Transform(({ value }) => value.toLowerCase().trim())
    email: string;

    @ApiProperty({
      example: '100.100.100-10',
      description: 'CPF do usuário',
    })
    @IsString({message: 'Cpf inválido!'})
    @IsNotEmpty()
    cpf: string;

    @ApiProperty({
      example: 'senha123',
      description: 'Senha do usuário',
    })
    @IsString()
    @MinLength(8, { message: 'A senha deve ter pelo menos 8 caractetes...' })
    @IsNotEmpty()
    password: string;
}