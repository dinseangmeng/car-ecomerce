"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsService = void 0;
const common_1 = require("@nestjs/common");
const file_service_1 = require("../File/file.service");
const prisma_service_1 = require("../prisma/prisma.service");
let CarsService = class CarsService {
    constructor(prisma, fileService) {
        this.prisma = prisma;
        this.fileService = fileService;
    }
    async listing(page, size) {
        const cars_n = await this.prisma.car.count({});
        const cars = await this.prisma.car.findMany({
            select: {
                id: true,
                name: true,
                imagePath: true,
                model: true,
                price: true,
                car_type_id: true,
                userId: true,
                type: true,
                user: {
                    select: {
                        email: true,
                        username: true,
                        firstName: true,
                        lastName: true,
                        profile: true,
                        statusId: true,
                        status: {
                            select: {
                                statusName: true,
                                id: true
                            }
                        }
                    },
                }
            },
            skip: Number(page) * Number(size),
            take: Number(size)
        });
        return { cars_n, cars };
    }
    async add(file, carData, User) {
        let filePath = "file/Default/default_image_Card.png";
        if (file) {
            filePath = await this.fileService.SaveImage(file, 'file');
        }
        const newCard = await this.prisma.car.create({
            data: {
                name: String(carData.name),
                imagePath: filePath,
                model: String(carData.model),
                price: Number(carData.price),
                car_type_id: Number(carData.car_type_id),
                userId: User.id
            },
            include: {
                type: true,
                user: {
                    select: {
                        email: true,
                        username: true,
                        firstName: true,
                        lastName: true,
                        profile: true,
                        statusId: true,
                        status: {
                            select: {
                                statusName: true,
                                id: true
                            }
                        }
                    },
                }
            }
        });
        return newCard;
    }
};
CarsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        file_service_1.FileService])
], CarsService);
exports.CarsService = CarsService;
//# sourceMappingURL=cars.service.js.map