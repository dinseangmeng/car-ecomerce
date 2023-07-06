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
exports.FileController = void 0;
const common_1 = require("@nestjs/common");
const file_service_1 = require("./file.service");
const fs_1 = require("fs");
let FileController = class FileController {
    constructor(fileService) {
        this.fileService = fileService;
    }
    getCardImage(req, res) {
        let filePath = req.url.replace('/static', '').replace('/get/', '');
        filePath = filePath.split('%20').join(" ");
        const rootPath = './';
        const file = `${rootPath}${filePath}`;
        console.log(file);
        if ((0, fs_1.existsSync)(file) && (0, fs_1.statSync)(file).isFile()) {
            return res.sendFile(file, { root: './' });
        }
        else {
            return res.status(404).sendFile('./asset/file_NotFoundException.html', { root: './src' });
        }
    }
};
__decorate([
    (0, common_1.Get)("/get/*"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], FileController.prototype, "getCardImage", null);
FileController = __decorate([
    (0, common_1.Controller)('static'),
    __metadata("design:paramtypes", [file_service_1.FileService])
], FileController);
exports.FileController = FileController;
//# sourceMappingURL=file.controller.js.map