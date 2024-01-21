"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("./route/auth/auth"));
require("dotenv").config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// todo - cors setup
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });
app.get("/", (_req, res) => {
    return res.send("Express Typescript on Vercel");
});
app.get("/ping", (_req, res) => {
    return res.send("pong 🏓");
});
// use router
app.use("/auth", auth_1.default);
const port = process.env.PORT || 8080;
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map