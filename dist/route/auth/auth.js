"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../../apis/auth");
const authRouter = express_1.default.Router();
authRouter.get("/v1/user-registration", auth_1.userRegisterV1);
authRouter.get("/v1/user-login", auth_1.userLoginV1);
exports.default = authRouter;
//# sourceMappingURL=auth.js.map