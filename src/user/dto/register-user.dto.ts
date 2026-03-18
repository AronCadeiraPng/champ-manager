import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class RegisterUserDto {
    @ApiProperty({
      example: 'Gabriel',
      description: 'Nome do usuário',
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
      example: 'Gabriel@gmail.com',
      description: 'Email do usuário',
    })
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @Transform(({ value }) => value.toLowerCase().trim())
    email: string;

    @ApiProperty({
      example: '100.100.100-10',
      description: 'CPF do usuário',
    })
    @IsString()
    @IsNotEmpty()
    cpf: string;

    @ApiProperty({
      example: 'Senha123',
      description: 'Senha do usuário',
    })
    @IsString()
    @IsNotEmpty()
    password: string;
}