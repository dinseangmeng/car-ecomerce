import { CarsService } from './cars.service';
import { car_validator } from 'src/Validation/car/index';
import { Request } from 'express';
export declare class CarsController {
    private readonly carService;
    constructor(carService: CarsService);
    listing(page?: Number, size?: Number): Promise<{
        cars_n: number;
        cars: {
            user: {
                email: string;
                username: string;
                statusId: number;
                firstName: string;
                lastName: string;
                profile: string;
                status: {
                    statusName: string;
                    id: number;
                };
            };
            name: string;
            imagePath: string;
            model: string;
            price: import("@prisma/client/runtime").Decimal;
            car_type_id: number;
            userId: number;
            type: import(".prisma/client").car_type;
        }[];
    }>;
    createCard(file: any, car: car_validator, reg: Request): Promise<import(".prisma/client").car & {
        user: {
            email: string;
            username: string;
            statusId: number;
            firstName: string;
            lastName: string;
            profile: string;
            status: {
                statusName: string;
                id: number;
            };
        };
        type: import(".prisma/client").car_type;
    }>;
}
