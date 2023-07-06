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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
const fs = require("fs");
var download = require('download-file');
const dist_1 = require("@nestjs/config/dist");
const file_service_1 = require("../File/file.service");
const jwt_1 = require("@nestjs/jwt");
let UserService = class UserService {
    constructor(jwt, prisma, config, fileService) {
        this.jwt = jwt;
        this.prisma = prisma;
        this.config = config;
        this.fileService = fileService;
    }
    async EditProfile(file, userInforToken, data) {
        const tmpUser = await this.prisma.user.findFirst({
            where: {
                id: userInforToken.id
            }
        });
        const isIdenticallPass = await bcrypt.compare(data.passwordConfirm, tmpUser.password);
        if (!isIdenticallPass)
            throw new common_1.ForbiddenException("Incorrect username or Password");
        if (file) {
            var newName = await this.fileService.SaveImage(file, 'file/user');
            try {
                fs.unlinkSync(`${tmpUser.profile}`);
            }
            catch (err) {
                console.error(err);
            }
        }
        else if (!tmpUser.profile) {
            try {
                fs.unlinkSync(`${tmpUser.profile}`);
            }
            catch (err) {
                console.error(err);
            }
            var url = `https://api.multiavatar.com/${data.username}_${data.firstname}_${data.lastname}.png`;
            const preUnique = Math.floor(Math.random() * 10e10 + 9999999);
            var newName = `${data.username}_${data.firstname}_${data.lastname}-${preUnique}.png`;
            var options = {
                directory: "./file/user/",
                filename: newName
            };
            newName = `./file/user/${newName}`;
            download(url, options, function (err) {
                if (err)
                    throw err;
            });
        }
        try {
            const user = await this.prisma.user.update({
                where: {
                    id: Number(userInforToken.id)
                },
                data: {
                    email: data.email,
                    username: data.username,
                    firstName: data.firstname,
                    lastName: data.lastname,
                    profile: newName != "" || newName != null ? newName : ""
                },
            });
            delete user.password;
            return user;
        }
        catch (error) {
            if (error.code == 'P2002') {
                throw new common_1.ForbiddenException("Credentail taken");
            }
            return { msg: error };
        }
    }
    async ChangePassword(data, user) {
        const tmpUser = await this.prisma.user.findFirst({
            where: {
                id: user.id
            }
        });
        const isIdenticallPass = await bcrypt.compare(data.currentPassword, tmpUser.password);
        if (!isIdenticallPass)
            throw new common_1.ForbiddenException("Incorrect current Password");
        if (data.confirmPawword != data.newPassword)
            throw new common_1.ForbiddenException("Invalid new Password");
        try {
            const salt = await bcrypt.genSalt();
            const hasPassword = await bcrypt.hash(data.newPassword, salt);
            await this.prisma.user.update({
                where: {
                    id: user.id
                },
                data: {
                    password: hasPassword
                }
            });
            const token = await this.generateToken(user.id, user.email, user.statusId);
            delete user.password;
            return { data: {
                    access_token: token,
                    msg: "Change password Successfull"
                } };
        }
        catch (error) {
            if (error.code == 'P2002') {
                throw new common_1.ForbiddenException("Credentail taken");
            }
            return { msg: error };
        }
    }
    async generateToken(id, username, statusId) {
        const predata = {
            id,
            username,
            statusId
        };
        const SECRETE_KEY = this.config.get('JWT_SECRET_KEY');
        return await this.jwt.signAsync(predata, {
            expiresIn: "30d",
            secret: SECRETE_KEY
        });
    }
    async listing(page, size) {
        const n_car = await this.prisma.car.count({});
        const car = await this.prisma.car.findMany({
            select: {
                id: true,
                name: true,
                imagePath: true,
                model: true,
            }
        });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        prisma_service_1.PrismaService,
        dist_1.ConfigService,
        file_service_1.FileService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map