"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = exports.STATUS_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.STATUS_KEY = "statusid";
const Status = (...statusid) => (0, common_1.SetMetadata)(exports.STATUS_KEY, statusid);
exports.Status = Status;
//# sourceMappingURL=role.decorator.js.map