import { PrismaService } from 'src/prisma/prisma.service';
import { passwordChangeValidation, UserUpdateValidation } from 'src/Validation';
import { ConfigService } from '@nestjs/config/dist';
import { FileService } from 'src/File/file.service';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private jwt;
    private prisma;
    private config;
    private fileService;
    constructor(jwt: JwtService, prisma: PrismaService, config: ConfigService, fileService: FileService);
    EditProfile(file: any, userInforToken: any, data: UserUpdateValidation): Promise<import(".prisma/client").User | {
        msg: any;
    }>;
    ChangePassword(data: passwordChangeValidation, user: any): Promise<{
        data: {
            access_token: String;
            msg: string;
        };
        msg?: undefined;
    } | {
        msg: any;
        data?: undefined;
    }>;
    generateToken(id: number, username: string, statusId: number): Promise<String>;
    listing(page: Number, size: Number): Promise<void>;
}
