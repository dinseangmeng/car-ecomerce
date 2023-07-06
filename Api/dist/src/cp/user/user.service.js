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
const prisma_service_1 = require("../../prisma/prisma.service");
const fs = require("fs");
const bcrypt = require("bcrypt");
const file_service_1 = require("../../File/file.service");
var download = require('download-file');
let UserService = class UserService {
    constructor(prisma, fileService) {
        this.prisma = prisma;
        this.fileService = fileService;
    }
    async listing() {
        const n_user = await this.prisma.user.count({});
        const user = await this.prisma.user.findMany({
            select: {
                id: true,
                email: true,
                username: true,
                firstName: true,
                lastName: true,
                profile: true,
                created: true,
                updated: true,
                statusId: true,
                status: true,
                cars: true
            },
            take: 10,
        });
        return { n_user, user };
    }
    async Delete(userId, user) {
        if (userId.id == user.id)
            return { msg: "User can't delete your self" };
        const usertmp = await this.prisma.user.findFirst({
            where: {
                id: Number(userId.id)
            }
        });
        if (!user) {
            return { msg: "User not found" };
        }
        try {
            fs.unlinkSync(`./file${usertmp.profile}`);
        }
        catch (err) {
            console.error(err);
        }
        return await this.prisma.user.delete({
            where: {
                id: Number(userId.id)
            }
        });
    }
    async EditProfile(file, userid, data) {
        let tmp = await this.prisma.user.findFirst({
            where: {
                id: Number(userid.id)
            }
        });
        if (file) {
            try {
                fs.unlinkSync(`${tmp.profile}`);
            }
            catch (err) {
                console.error(err);
            }
            var newName = await this.fileService.SaveImage(file, 'file/user');
        }
        else if (!tmp.profile) {
            try {
                fs.unlinkSync(`${tmp.profile}`);
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
                    id: Number(userid.id)
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
    async ChangePassword(newpassword, userId) {
        try {
            const salt = await bcrypt.genSalt();
            const hasPassword = await bcrypt.hash(newpassword, salt);
            await this.prisma.user.update({
                where: {
                    id: Number(userId.id)
                },
                data: {
                    password: hasPassword
                }
            });
            return { data: {
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
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        file_service_1.FileService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map