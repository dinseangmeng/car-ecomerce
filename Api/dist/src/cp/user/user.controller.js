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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const role_decorator_1 = require("../../Auth/decorators/role.decorator");
const role_enum_1 = require("../../Auth/enum/role.enum");
const jwt_guard_1 = require("../../Auth/guard/jwt.guard");
const role_guard_1 = require("../../Auth/guard/role.guard");
const user_service_1 = require("./user.service");
const platform_express_1 = require("@nestjs/platform-express");
const Validation_1 = require("../../Validation");
let UserController = class UserController {
    constructor(UserProvider) {
        this.UserProvider = UserProvider;
    }
    listing() {
        return this.UserProvider.listing();
    }
    delete(id, req) {
        return this.UserProvider.Delete(id, req.user);
    }
    EditProfile(file, userInfo, id) {
        return this.UserProvider.EditProfile(file, id, userInfo);
    }
    ChangePassword(data, id) {
        return this.UserProvider.ChangePassword(data.newPassword, id);
    }
};
__decorate([
    (0, role_decorator_1.Status)(role_enum_1.RoleEnum.Admin),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, role_guard_1.RolesGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "listing", null);
__decorate([
    (0, role_decorator_1.Status)(role_enum_1.RoleEnum.Admin),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, role_guard_1.RolesGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "delete", null);
__decorate([
    (0, role_decorator_1.Status)(role_enum_1.RoleEnum.Admin),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, role_guard_1.RolesGuard),
    (0, common_1.Put)('/edit/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('profile')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Validation_1.UserUpdateValidation, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "EditProfile", null);
__decorate([
    (0, role_decorator_1.Status)(role_enum_1.RoleEnum.Admin),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, role_guard_1.RolesGuard),
    (0, common_1.Put)('/changePassword/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('profile')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "ChangePassword", null);
UserController = __decorate([
    (0, common_1.Controller)('api/cp/user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map