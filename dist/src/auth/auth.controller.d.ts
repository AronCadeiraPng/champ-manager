import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from 'src/users/entities/user.entity';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: LoginUserDto): Promise<{
        access_token: string;
    }>;
    update(id: string, dto: UpdateUserDto, req: any): Promise<User>;
    delete(id: string, req: any): Promise<User>;
}
