import { UserService } from './user.service';
import { Request } from 'express';
import { UserUpdateValidation } from 'src/Validation';
export declare class UserController {
    private readonly UserProvider;
    constructor(UserProvider: UserService);
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
    delete(id: number, req: Request): Promise<import(".prisma/client").User | {
        msg: string;
    }>;
    EditProfile(file: any, userInfo: UserUpdateValidation, id: any): Promise<import(".prisma/client").User | {
        msg: any;
    }>;
    ChangePassword(data: any, id: any): Promise<{
        data: {
            msg: string;
        };
        msg?: undefined;
    } | {
        msg: any;
        data?: undefined;
    }>;
}
