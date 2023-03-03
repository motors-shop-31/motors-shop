import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";
import userCreateService from "../Services/user/userCreate.service";
import userForgotPasswordService from "../Services/user/userForgotPassword.service";
import userResetPasswordService from "../Services/user/userResetPassword.service";
import userVerifyPwService from "../Services/user/userVerifyPw.service";

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


const UserForgotPasswordController = async (req: Request, res: Response) => {
	const { email } = req.body;
	console.log(email)
	const codePassword = await userForgotPasswordService({ email });
	return res.status(200).send(codePassword)
};

const UserResetPasswordController = async (req: Request, res: Response) => {
	const newPassword = req.body;
    const { code } = req.params
	const userPassword = await userResetPasswordService(newPassword, code);
	return res.status(200).send(userPassword)
};


const UserVerifyPwController = async (req: Request, res: Response) => {
	const { code } = req.body;
	const userCode = await userVerifyPwService({ code });
	return res.status(200).send(userCode)
};


export { userCreateController, UserForgotPasswordController, UserResetPasswordController, UserVerifyPwController };
