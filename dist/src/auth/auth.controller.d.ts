import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: LoginUserDto): Promise<{
        access_token: string;
    }>;
}
