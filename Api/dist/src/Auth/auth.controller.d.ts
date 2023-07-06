import { UserLoginValidation, UserValidation } from 'src/Validation/user';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authProvider;
    constructor(authProvider: AuthService);
    login(userInfo: UserLoginValidation): Promise<{
        data: {
            access_token: String;
            user: import(".prisma/client").User;
            msg: string;
        };
    }>;
    register(file: any, userInfo: UserValidation): Promise<{
        data: {
            access_token: String;
            user: import(".prisma/client").User;
            msg: string;
        };
        msg?: undefined;
    } | {
        msg: any;
        data?: undefined;
    }>;
}
