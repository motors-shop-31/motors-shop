import { Request, Response, NextFunction } from "express";

import * as yup from "yup";
import { Schema } from "yup";
import { ILogin } from "../interfaces/user.interfaces";

export const loginCreateSchema: Schema<ILogin> = yup.object().shape({
  name: yup.string().required(),
  password: yup.string().required(),
});

export const validateLoginCreate =
  (schema: Schema<ILogin>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      try {
        const validatedData = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });

        req.loginValidate = validatedData;

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
