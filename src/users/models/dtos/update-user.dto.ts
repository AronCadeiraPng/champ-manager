import { ApiProperty, PartialType } from '@nestjs/swagger';
import { RegisterUserDto } from './register-user.dto';
import { IsString } from 'class-validator';
import { UserRolesEnum } from '../../../_common/enums/user-roles.enum';
export class UpdateUserDto extends PartialType(RegisterUserDto){
    @ApiProperty({
      example: 'Gabriel',
      description: 'Nome do usuário',
    })
    @IsString()
    role?: UserRolesEnum;
}