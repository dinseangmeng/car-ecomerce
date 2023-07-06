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
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const dist_1 = require("@nestjs/config/dist");
const aws_s3_service_1 = require("../aws-s3/aws-s3.service");
let FileService = class FileService {
    constructor(prisma, config, awsS3Service) {
        this.prisma = prisma;
        this.config = config;
        this.awsS3Service = awsS3Service;
    }
    async SaveImage(file, path) {
        const bucketName = 'car-eccomerce-ip';
        const fileExtension = file.originalname.split('.').pop();
        const newName = `${Date.now()}${Math.round(Math.random() * 9999999)}.${fileExtension}`;
        const result = await this.awsS3Service.uploadFile(bucketName, newName, file.buffer, 'public-read');
        return result.Location;
    }
};
FileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        dist_1.ConfigService,
        aws_s3_service_1.AwsS3Service])
], FileService);
exports.FileService = FileService;
//# sourceMappingURL=file.service.js.map