import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";
import productCreateService from "../Services/product/productCreate.service";
import productGetAllService from "../Services/product/productGetAll.service";

const productCreateController = async (req: Request, res: Response) => {
  try {
    const data = req.productValidate;

    const { id } = req.ITokenInfo;

    const resp = await productCreateService(data, id);

    return res.status(201).json(resp);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

const productGetAllController = async (req: Request, res: Response) => {
  try {
    const resp = await productGetAllService();

    return res.status(200).json(resp);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export { productCreateController, productGetAllController };
