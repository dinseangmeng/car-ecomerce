import { PrismaService } from 'src/prisma/prisma.service';
import { UserUpdateValidation } from 'src/Validation';
import { FileService } from 'src/File/file.service';
export declare class UserService {
    private prisma;
    private fileService;
    constructor(prisma: PrismaService, fileService: FileService);
    listing(): Promise<{
        n_user: number;
        user: {
            created: Date;
            updated: Date;
            id: number;
            email: string;
            username: string;
            statusId: number;
            firstName: string;
            lastName: string;
            profile: string;
            status: import(".prisma/client").Status;
            cars: import(".prisma/client").car[];
        }[];
    }>;
    Delete(userId: any, user: any): Promise<import(".prisma/client").User | {
        msg: string;
    }>;
    EditProfile(file: any, userid: any, data: UserUpdateValidation): Promise<import(".prisma/client").User | {
        msg: any;
    }>;
    ChangePassword(newpassword: string, userId: any): Promise<{
        data: {
            msg: string;
        };
        msg?: undefined;
    } | {
        msg: any;
        data?: undefined;
    }>;
}
