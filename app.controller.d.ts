import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
export declare class AppController {
    private authService;
    private readonly appService;
    constructor(authService: AuthService, appService: AppService);
    getDocs(res: any): string;
    login(req: any): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
}
