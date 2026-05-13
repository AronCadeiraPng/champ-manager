import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from 'src/users/models/entity/user.entity';
import { UpdateUserDto } from 'src/users/models/dtos/update-user.dto';
import type { Response } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: LoginUserDto, response: Response): Promise<void>;
    update(id: string, dto: UpdateUserDto, req: any): Promise<User>;
    delete(id: string): Promise<User>;
}
