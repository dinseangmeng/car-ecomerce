import { Decimal } from '@prisma/client/runtime';
import { FileService } from 'src/File/file.service';
import { car_validator } from 'src/Validation/car/index';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CarsService {
    private prisma;
    private fileService;
    constructor(prisma: PrismaService, fileService: FileService);
    listing(page: Number, size: Number): Promise<{
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
            id: number;
            name: string;
            imagePath: string;
            model: string;
            price: Decimal;
            car_type_id: number;
            userId: number;
            type: import(".prisma/client").car_type;
        }[];
    }>;
    add(file: any, carData: car_validator, User: any): Promise<import(".prisma/client").car & {
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
