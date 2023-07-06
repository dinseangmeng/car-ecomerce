import { FileService } from 'src/File/file.service';
import { type_validator } from 'src/Validation/car/index';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CarTypeService {
    private prisma;
    private fileService;
    constructor(prisma: PrismaService, fileService: FileService);
    listing(page: Number, size: Number): Promise<{
        car_model_n: number;
        car_model: {
            id: number;
            name: string;
            imagePath: string;
            car: import(".prisma/client").car[];
        }[];
    }>;
    add(file: any, car_model: type_validator): Promise<import(".prisma/client").car_type>;
    edit(file: any, car_model: type_validator, id: number): Promise<import(".prisma/client").car_type | {
        msg: string;
    }>;
}
