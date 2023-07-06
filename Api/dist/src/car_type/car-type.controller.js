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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarTypeController = void 0;
const common_1 = require("@nestjs/common");
const car_type_service_1 = require("./car-type.service");
const jwt_guard_1 = require("../Auth/guard/jwt.guard");
const platform_express_1 = require("@nestjs/platform-express");
const car_1 = require("../Validation/car");
let CarTypeController = class CarTypeController {
    constructor(carModelService) {
        this.carModelService = carModelService;
    }
    listing(page = 0, size = 50) {
        return this.carModelService.listing(page, size);
    }
    add(file, carModel) {
        return this.carModelService.add(file, carModel);
    }
    update(id, file, carModel) {
        return this.carModelService.edit(file, carModel, id.id);
    }
};
__decorate([
    (0, common_1.Get)("/"),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('size')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], CarTypeController.prototype, "listing", null);
__decorate([
    (0, common_1.Post)("/"),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, car_1.type_validator]),
    __metadata("design:returntype", void 0)
], CarTypeController.prototype, "add", null);
__decorate([
    (0, common_1.Put)("/:id"),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, car_1.type_validator]),
    __metadata("design:returntype", void 0)
], CarTypeController.prototype, "update", null);
CarTypeController = __decorate([
    (0, common_1.Controller)('api/car-type'),
    __metadata("design:paramtypes", [car_type_service_1.CarTypeService])
], CarTypeController);
exports.CarTypeController = CarTypeController;
//# sourceMappingURL=car-type.controller.js.map