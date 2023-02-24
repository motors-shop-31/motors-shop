import { Router } from "express";
import {
  productCreateController,
  productDeleteController,
  productGetAllController,
  productGetUserController,
  productUpdateController,
} from "../Controllers/product.controller";
import autentificarToken from "../Middlewares/autenticacao.middleware";
import { authUser } from "../Middlewares/authUser.middleware";
import {
  productCreateSchema,
  validateProductCreate,
} from "../validator/productValidate.middleware";

const productRoutes = Router();

productRoutes.post(
  "",
  autentificarToken,
  validateProductCreate(productCreateSchema),
  productCreateController
);

productRoutes.get("", productGetAllController);
productRoutes.get("/user/:id", productGetUserController);
productRoutes.delete("/:id",  autentificarToken, authUser, productDeleteController);
productRoutes.patch("/:id", autentificarToken, authUser, productUpdateController);

export default productRoutes;
