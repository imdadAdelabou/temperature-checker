import { Router } from "express";
import {
  updateEngineId,
  updateUserController,
} from "../controllers/user.controller";

const userRoute: Router = Router();

userRoute.put("/:email", updateUserController);
userRoute.put("/engineId/:email", updateEngineId);

export default userRoute;
