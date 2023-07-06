import { CarTypeService } from './car-type.service';
import { type_validator } from 'src/Validation/car';
export declare class CarTypeController {
    private readonly carModelService;
    constructor(carModelService: CarTypeService);
    listing(page?: Number, size?: Number): Promise<{
        car_model_n: number;
        car_model: {
            id: number;
            name: string;
            imagePath: string;
            car: import(".prisma/client").car[];
        }[];
    }>;
    add(file: any, carModel: type_validator): Promise<import(".prisma/client").car_type>;
    update(id: any, file: any, carModel: type_validator): Promise<import(".prisma/client").car_type | {
        msg: string;
    }>;
}
