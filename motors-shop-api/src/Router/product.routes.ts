import { Router } from "express";
import {
  productCreateController,
  productGetAllController,
} from "../Controllers/product.controller";
import autentificarToken from "../Middlewares/autenticacao.middleware";
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

export default productRoutes;
