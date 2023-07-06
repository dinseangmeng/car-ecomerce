"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./Auth/auth.module");
const prisma_module_1 = require("./prisma/prisma.module");
const user_module_1 = require("./User/user.module");
const user_module_2 = require("./cp/user/user.module");
const file_module_1 = require("./File/file.module");
const platform_express_1 = require("@nestjs/platform-express");
const app_controller_1 = require("./app.controller");
const core_1 = require("@nestjs/core");
const _404_Exception_1 = require("./Exception/404_Exception");
const car_type_module_1 = require("./car_type/car-type.module");
const cars_module_1 = require("./cars/cars.module");
const aws_s3_module_1 = require("./aws-s3/aws-s3.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true
            }),
            platform_express_1.MulterModule.register({
                dest: '/file'
            }),
            auth_module_1.AuthModule,
            prisma_module_1.PrismaModule, user_module_1.UserModule, user_module_2.UserModuleAdmin, file_module_1.FileModule, car_type_module_1.CarTypeModule, cars_module_1.CarsModule, aws_s3_module_1.AwsS3Module
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: _404_Exception_1.NotFoundExceptionFilter,
            }
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map