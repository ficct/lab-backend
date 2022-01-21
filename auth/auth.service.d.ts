import { JwtService } from '@nestjs/jwt';
import { UserService } from './user/user.service';
import { User } from 'entities/User';
export declare class AuthService {
    private jwtService;
    private userService;
    constructor(jwtService: JwtService, userService: UserService);
    validateUser(email: string, pass: string): Promise<User | "user Not Found" | "Wrong password">;
    login(user: User): Promise<{
        access_token: string;
    }>;
}
