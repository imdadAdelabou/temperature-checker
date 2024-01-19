import express, { Router } from "express";
import { login, register } from "../controllers/auth.controller";

const authRouter: Router = express.Router();

authRouter.get("/login/:email", login);
authRouter.post("/register", register);

export default authRouter;
