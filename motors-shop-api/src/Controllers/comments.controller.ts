import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";
import commentsListByProductService from "../Services/comments/commentsListByProduct.service";
import commentsCreateService from "../Services/comments/commentsCreate.service";
import { instanceToPlain } from "class-transformer";
import commentsDeleteService from "../Services/comments/commentsDelete.service";
import commentsUpdateService from "../Services/comments/comments.Update.service";

const commentsCreateController = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const idUser = req.ITokenInfo.id;
    console.log("**********************");
    console.log(idUser);
    console.log("**********************");

    const response = await commentsCreateService(data, idUser);

    return res.status(201).json(instanceToPlain(response));
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

const commentsListByProductController = async (req: Request, res: Response) => {
  try {
    const idProduct = req.params.id;

    const response = await commentsListByProductService(idProduct);
    return res.status(200).json(response);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

const commentsUpdateController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const idUser = req.ITokenInfo.id;

    const data = req.body;

    const response = await commentsUpdateService(id, idUser, data);
    return res.status(200).json(response);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

const commentsDeleteController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const idUser = req.ITokenInfo.id;

    const response = await commentsDeleteService(id, idUser);
    return res.status(204).json(response);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export {
  commentsCreateController,
  commentsListByProductController,
  commentsUpdateController,
  commentsDeleteController,
};
