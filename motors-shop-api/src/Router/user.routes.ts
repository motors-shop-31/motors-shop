import { Router } from "express";
import { userCreateController } from "../Controllers/user.controllers";
import {
  userCreateSchema,
  validateUserCreate,
} from "../validator/userValidate.middleware";

const userRoutes = Router();

userRoutes.post("", validateUserCreate(userCreateSchema), userCreateController);

export default userRoutes;
