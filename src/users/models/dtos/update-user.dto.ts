import { ApiProperty, PartialType } from "@nestjs/swagger";
import { RegisterUserDto } from "./register-user.dto";
import { IsString } from "class-validator";
import { UserRoles } from "src/common/enums/user-roles.enum";

export class UpdateUserDto extends PartialType(RegisterUserDto){
    @ApiProperty({
      example: 'Gabriel',
      description: 'Nome do usuário',
    })
    @IsString()
    role?: UserRoles;
}