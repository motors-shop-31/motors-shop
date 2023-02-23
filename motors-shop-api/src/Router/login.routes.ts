import { Router } from "express";
import { loginController } from "../Controllers/login.controller";
import {
  loginCreateSchema,
  validateLoginCreate,
} from "../validator/loginValidate.middleware";

const loginRoutes = Router();

loginRoutes.post("", validateLoginCreate(loginCreateSchema), loginController);

export default loginRoutes;
