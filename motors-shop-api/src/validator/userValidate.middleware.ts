import { Request, Response, NextFunction } from "express";

import * as yup from "yup";
import { Schema } from "yup";
import { ICreateUser } from "../interfaces/user.interfaces";

import { hashSync } from "bcrypt";

export const userCreateSchema: Schema<ICreateUser> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .transform((value, originalValue) => {
      return hashSync(originalValue, 10);
    }),
  cpf: yup.string().required(),
  birthday: yup.date().required(),
  tel: yup.string().required(),
  description: yup.string(),
  account_type: yup.string().required(),
  address: yup.object().shape({
    cep: yup.number().required(),
    state: yup.string().required(),
    city: yup.string().required(),
    street: yup.string().required(),
    number: yup.string().required(),
    complement: yup.string(),
  }),
});

export const validateUserCreate =
  (schema: Schema<ICreateUser>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      try {
        const validatedData = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });

        req.userCreateValidate = validatedData;

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
