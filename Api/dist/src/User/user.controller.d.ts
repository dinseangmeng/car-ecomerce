/// <reference types="passport" />
import { UserService } from './user.service';
import { Request } from 'express';
import { passwordChangeValidation, UserUpdateValidation } from 'src/Validation';
export declare class UserController {
    private readonly UserService;
    constructor(UserService: UserService);
    getProfile(reg: Request): {
        msg: Express.User;
    };
    EditProfile(file: any, userInfo: UserUpdateValidation, reg: Request): Promise<import(".prisma/client").User | {
        msg: any;
    }>;
    ChangePassword(data: passwordChangeValidation, reg: Request): Promise<{
        data: {
            access_token: String;
            msg: string;
        };
        msg?: undefined;
    } | {
        msg: any;
        data?: undefined;
    }>;
    listCar(page?: Number, size?: Number): void;
}
