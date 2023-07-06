import { RoleEnum } from '../enum/role.enum';
export declare const STATUS_KEY = "statusid";
export declare const Status: (...statusid: RoleEnum[]) => import("@nestjs/common").CustomDecorator<string>;
