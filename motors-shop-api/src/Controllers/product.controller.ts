import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { Product } from "../entities/product.entity";
import { AppError, handleError } from "../errors/appError";
import productCreateService from "../Services/product/productCreate.service";
import productDeleteService from "../Services/product/productDelete.service";
import productGetAllService from "../Services/product/productGetAll.service";
import productGetUserService from "../Services/product/productGetUser.service";
import productUpdateService from "../Services/product/productUpdate.service";

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

const productGetUserController  = async (req: Request, res: Response) => {
  const user_id = req.params.id

  const response = await productGetUserService(user_id);
  return res.status(200).json(response);
};

const productDeleteController = async (req: Request, res: Response) => {
  const id = req.params.id

  const response = await productDeleteService(id);
  return res.status(200).json(response);
}

const productUpdateController = async (req: Request, res: Response) => {
    const requestData = req.body
    const id: string = req.params.id

    const response = await productUpdateService(requestData, id)
    if(response instanceof Product){
        return res.json(response)
    }
    return res.status(201).json( instanceToPlain(response));
}


export { productCreateController, productGetAllController, productGetUserController, productDeleteController, productUpdateController };
