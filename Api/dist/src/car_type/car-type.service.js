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
exports.CarTypeService = void 0;
const common_1 = require("@nestjs/common");
const file_service_1 = require("../File/file.service");
const prisma_service_1 = require("../prisma/prisma.service");
const fs = require("fs");
let CarTypeService = class CarTypeService {
    constructor(prisma, fileService) {
        this.prisma = prisma;
        this.fileService = fileService;
    }
    async listing(page, size) {
        const car_model_n = await this.prisma.car_type.count({});
        const car_model = await this.prisma.car_type.findMany({
            select: {
                id: true,
                name: true,
                imagePath: true,
                car: true
            },
            skip: Number(page) * Number(size),
            take: Number(size)
        });
        return {
            car_model_n,
            car_model
        };
    }
    async add(file, car_model) {
        let filePath = "file/Default/default_car_model.png";
        if (file) {
            filePath = await this.fileService.SaveImage(file, 'file');
        }
        const carModel = await this.prisma.car_type.create({
            data: {
                name: String(car_model.name),
                imagePath: filePath
            },
        });
        return carModel;
    }
    async edit(file, car_model, id) {
        const carModelTmp = await this.prisma.car_type.findFirst({
            where: {
                id: Number(id)
            }
        });
        if (!carModelTmp) {
            return { msg: "Car model not found" };
        }
        if (file) {
            if (carModelTmp.imagePath != "file/Default/default_car_model.png") {
                try {
                    fs.unlinkSync(`./${carModelTmp.imagePath}`);
                }
                catch (err) {
                    console.error(err);
                }
            }
            var newName = await this.fileService.SaveImage(file, 'file');
        }
        else {
            if (carModelTmp.imagePath)
                var newName = carModelTmp.imagePath;
        }
        const updatedModel = await this.prisma.car_type.update({
            where: {
                id: Number(id)
            },
            data: {
                name: String(car_model.name),
                imagePath: newName != null || newName != undefined ? newName : "file/Default/default_car_model.png"
            },
        });
        return updatedModel;
    }
};
CarTypeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        file_service_1.FileService])
], CarTypeService);
exports.CarTypeService = CarTypeService;
//# sourceMappingURL=car-type.service.js.map