import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";
import { instanceToPlain } from "class-transformer";
import addressUpdateService from "../Services/address/addressUpdate.service";

const addressUpdateController = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const userId = req.ITokenInfo.id;

    const response = await addressUpdateService(data, userId);

    return res.status(200).json(response);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export { addressUpdateController };
