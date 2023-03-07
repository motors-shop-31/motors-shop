import { Router } from "express";
import { addressUpdateController } from "../Controllers/address.controller";
import {
  userById,
  userCreateController,
  userDeleteController,
  userUpdateController,
} from "../Controllers/user.controllers";
import autentificarToken from "../Middlewares/autenticacao.middleware";
import {
  userCreateSchema,
  validateUserCreate,
} from "../validator/userValidate.middleware";

const userRoutes = Router();

userRoutes.post("", validateUserCreate(userCreateSchema), userCreateController);
userRoutes.get("", autentificarToken, userById);
userRoutes.patch("", autentificarToken, userUpdateController);
userRoutes.delete("/:id", userDeleteController);

userRoutes.patch("/address", autentificarToken, addressUpdateController);

export default userRoutes;
