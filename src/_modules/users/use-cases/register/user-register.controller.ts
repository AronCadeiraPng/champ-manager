import { Body, Controller, Post } from "@nestjs/common";
import { UserRegisterService } from "./user-register.service";
import { RegisterUserDto } from "../../models/dtos/register-user.dto";

@Controller('user')
export class RegisterUserController {
    constructor(
        private readonly service: UserRegisterService
    ) { }

    @Post('register')
    async execute(
        @Body() registerUserDto: RegisterUserDto    
    ) {
        return await this.service.registerUser(registerUserDto);
    }
}