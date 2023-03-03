import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";
import { IUpdateUser } from "../interfaces/user.interfaces";
import userCreateService from "../Services/user/userCreate.service";
import userDeleteService from "../Services/user/userDelete.service";
import userUpdateService from "../Services/user/userUpdate.service";
import { instanceToPlain } from "class-transformer";

const userCreateController = async (req: Request, res: Response) => {
  try {
    const data = req.userCreateValidate;

    const resp = await userCreateService(data);

    return res.status(201).json(resp);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

const userUpdateController = async (req: Request, res: Response) => {
  try {
    const data: IUpdateUser = req.body;

    const id = req.ITokenInfo.id;

    const resp = await userUpdateService(data, id);

    return res.status(200).json(instanceToPlain(resp));
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

const userDeleteController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const resp = await userDeleteService(id);

    return res.status(204).json(resp);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export { userCreateController, userUpdateController, userDeleteController };
