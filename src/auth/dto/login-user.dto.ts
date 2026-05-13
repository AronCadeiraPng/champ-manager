import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class LoginUserDto {
    @ApiProperty({
        example: 'Gabriel@gmail.com',
        description: 'Email do usuário',
    })
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @Transform(({ value }) => value.toLowerCase().trim())
    account: string;
    @ApiProperty({
        example: 'Senha123',
        description: 'Senha do usuário',
    })
    @IsString()
    @IsNotEmpty()
    password: string;
}