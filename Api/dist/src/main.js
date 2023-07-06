"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const express = require("express");
const dist_1 = require("@nestjs/config/dist");
let config = new dist_1.ConfigService();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ limit: '50mb' }));
    app.useGlobalPipes(new common_1.ValidationPipe({}));
    await app.listen(config.get('PORT'), () => {
        console.log(`Server run on http://localhost:${config.get('PORT')}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map