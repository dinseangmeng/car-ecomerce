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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
const runtime_1 = require("@prisma/client/runtime");
const dist_1 = require("@nestjs/jwt/dist");
const dist_2 = require("@nestjs/config/dist");
var download = require('download-file');
const file_service_1 = require("../File/file.service");
let AuthService = class AuthService {
    constructor(prisma, jwt, config, fileService) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
        this.fileService = fileService;
    }
    async register(file, userInfo) {
        if (file) {
            var newName = await this.fileService.SaveImage(file, 'file/user');
        }
        else {
            var url = `https://api.multiavatar.com/${userInfo.username}.png`;
            const preUnique = Math.floor(Math.random() * 10e10 + 9999999);
            var newName = `${userInfo.username}-${preUnique}.png`;
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
            const salt = await bcrypt.genSalt();
            const hasPassword = await bcrypt.hash(userInfo.password, salt);
            this.prisma;
            const user = await this.prisma.user.create({
                data: {
                    email: userInfo.email,
                    password: hasPassword,
                    username: userInfo.username,
                    firstName: userInfo.firstname,
                    lastName: userInfo.lastname,
                    statusId: Number(userInfo.statusId),
                    profile: newName != "" || newName != null ? newName : ""
                },
            });
            const token = await this.generateToken(user.id, user.email, user.statusId);
            delete user.password;
            return { data: {
                    access_token: token,
                    user,
                    msg: "Register Successfull"
                } };
        }
        catch (error) {
            if (error instanceof runtime_1.PrismaClientKnownRequestError) {
                if (error.code == 'P2002') {
                    throw new common_1.ForbiddenException("Credentail taken");
                }
            }
            return { msg: error };
        }
    }
    async Login(userInfo) {
        const user = await this.prisma.user.findFirst({
            where: {
                OR: [
                    { email: userInfo.EUID },
                    { username: userInfo.EUID },
                ],
                AND: [
                    { isactive: true }
                ]
            },
        });
        if (!user) {
            throw new common_1.ForbiddenException("Incorrect username or Password");
        }
        const isIdenticallPass = await bcrypt.compare(userInfo.password, user.password);
        if (!isIdenticallPass)
            throw new common_1.ForbiddenException("Incorrect username or Password");
        const token = await this.generateToken(user.id, user.email, user.statusId);
        delete user.password;
        return { data: {
                access_token: token,
                user,
                msg: "Register Successfull"
            } };
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
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        dist_1.JwtService,
        dist_2.ConfigService,
        file_service_1.FileService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map