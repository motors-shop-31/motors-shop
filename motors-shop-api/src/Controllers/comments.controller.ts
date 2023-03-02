import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";
import commentsListByProductService from "../Services/comments/commentsListByProduct.service";
import commentsCreateService from "../Services/comments/commentsCreate.service";
import { instanceToPlain } from "class-transformer";

const commentsCreateController = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const idUser = req.ITokenInfo.id;

    const response = await commentsCreateService(data, idUser);

    return res.status(201).json(instanceToPlain(response));
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

const commentsListByProductController = async (req: Request, res: Response) => {
  const idProduct = req.params.id;

  console.log(idProduct);

  const response = await commentsListByProductService(idProduct);
  return res.status(200).json(response);
};

export { commentsCreateController, commentsListByProductController };
