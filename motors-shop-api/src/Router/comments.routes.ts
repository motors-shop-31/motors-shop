import { Router } from "express";
import {
  commentsCreateController,
  commentsListByProductController,
} from "../Controllers/comments.controller";
import autentificarToken from "../Middlewares/autenticacao.middleware";

const commentsRoutes = Router();

commentsRoutes.post("", autentificarToken, commentsCreateController);
commentsRoutes.get("/:id", commentsListByProductController);

export default commentsRoutes;
