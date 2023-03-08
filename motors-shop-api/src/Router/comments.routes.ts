import { Router } from "express";
import {
  commentsCreateController,
  commentsDeleteController,
  commentsListByProductController,
  commentsUpdateController,
} from "../Controllers/comments.controller";
import autentificarToken from "../Middlewares/autenticacao.middleware";

const commentsRoutes = Router();

commentsRoutes.post("", autentificarToken, commentsCreateController);
commentsRoutes.get("/:id", commentsListByProductController);
commentsRoutes.patch("/:id", autentificarToken, commentsUpdateController);
commentsRoutes.delete("/:id", autentificarToken, commentsDeleteController);

export default commentsRoutes;
