import { Request, Response, NextFunction } from "express";

import * as yup from "yup";
import { Schema } from "yup";
import { IProductCreate } from "../interfaces/product.interfaces";

export const productCreateSchema: Schema<IProductCreate> = yup.object().shape({
  type: yup.string().required(),
  title: yup.string().required(),
  year: yup.number().required(),
  mileage: yup.number().required(),
  price: yup.number().required(),
  description: yup.string().required(),
  vehicle: yup.string().required(),
  published: yup.boolean().required(),
  cover_image: yup.string().url().required(),
  image: yup.array().required(),
});

export const validateProductCreate =
  (schema: Schema<IProductCreate>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      try {
        const validatedData = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });

        req.productValidate = validatedData;

        next();
      } catch (err: any) {
        return res.status(400).json({
          error: err.errors?.join(", "),
        });
      }
    } catch (err) {
      next(err);
    }
  };
