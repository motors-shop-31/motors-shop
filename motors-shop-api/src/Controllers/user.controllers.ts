import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";
import { IUpdateUser } from "../interfaces/user.interfaces";
import userCreateService from "../Services/user/userCreate.service";
import userForgotPasswordService from "../Services/user/userForgotPassword.service";
import userResetPasswordService from "../Services/user/userResetPassword.service";
import userVerifyPwService from "../Services/user/userVerifyPw.service";
import userDeleteService from "../Services/user/userDelete.service";
import userUpdateService from "../Services/user/userUpdate.service";
import { instanceToPlain } from "class-transformer";
import userListById from "../Services/user/userGetOne.service";

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

const userById = async (req: Request, res: Response) => {
  try {
    const { id } = req.ITokenInfo;
    const resp = await userListById(id);

    return res.status(200).json(resp);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

const UserForgotPasswordController = async (req: Request, res: Response) => {
  const { email } = req.body;
  console.log(email);
  const codePassword = await userForgotPasswordService({ email });
  return res.status(200).send(codePassword);
};

const UserResetPasswordController = async (req: Request, res: Response) => {
  const newPassword = req.body;
  const { code } = req.params;
  const userPassword = await userResetPasswordService(newPassword, code);
  return res.status(200).send(userPassword);
};

const UserVerifyPwController = async (req: Request, res: Response) => {
  const { code } = req.body;
  const userCode = await userVerifyPwService({ code });
  return res.status(200).send(userCode);
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

export {
  userCreateController,
  userUpdateController,
  userDeleteController,
  UserForgotPasswordController,
  UserResetPasswordController,
  UserVerifyPwController,
  userById,
};
