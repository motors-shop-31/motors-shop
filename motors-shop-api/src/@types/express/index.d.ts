import * as express from "express";
import { IProductCreate } from "../../interfaces/product.interfaces";
import { ICreateUser, ILogin } from "../../interfaces/user.interfaces";

declare global {
  namespace Express {
    interface Request {
      user: {
				id: string;
			};
      userCreateValidate: ICreateUser;
      loginValidate: ILogin;
      productValidate: IProductCreate;
      ITokenInfo: {
        id: string;
      };
    }
  }
}
