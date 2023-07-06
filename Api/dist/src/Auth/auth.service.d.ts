import { PrismaService } from 'src/prisma/prisma.service';
import { UserLoginValidation, UserValidation } from 'src/Validation';
import { JwtService } from '@nestjs/jwt/dist';
import { ConfigService } from '@nestjs/config/dist';
import { FileService } from 'src/File/file.service';
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    private fileService;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService, fileService: FileService);
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
    Login(userInfo: UserLoginValidation): Promise<{
        data: {
            access_token: String;
            user: import(".prisma/client").User;
            msg: string;
        };
    }>;
    generateToken(id: number, username: string, statusId: number): Promise<String>;
}
