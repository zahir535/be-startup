import express from "express";
import { userLoginV1, userRegisterV1 } from "../../apis/auth";

const authRouter = express.Router();

authRouter.get("/v1/user-registration", userRegisterV1);
authRouter.get("/v1/user-login", userLoginV1);

export default authRouter;
