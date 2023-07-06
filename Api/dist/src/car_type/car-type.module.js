"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarTypeModule = void 0;
const common_1 = require("@nestjs/common");
const car_type_service_1 = require("./car-type.service");
const car_type_controller_1 = require("./car-type.controller");
const strategry_1 = require("../Auth/strategry");
const role_guard_1 = require("../Auth/guard/role.guard");
const file_service_1 = require("../File/file.service");
let CarTypeModule = class CarTypeModule {
};
CarTypeModule = __decorate([
    (0, common_1.Module)({
        providers: [car_type_service_1.CarTypeService, strategry_1.JwtStrategy, role_guard_1.RolesGuard, file_service_1.FileService],
        controllers: [car_type_controller_1.CarTypeController]
    })
], CarTypeModule);
exports.CarTypeModule = CarTypeModule;
//# sourceMappingURL=car-type.module.js.map