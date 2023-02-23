import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";
import userCreateService from "../Services/user/userCreate.service";

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

export { userCreateController };
