import { User } from "./../../entities/user.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { sendEmail } from "../../nodemailer.util"
import { IEmailRequest } from "../../interfaces/email"

interface IUserPasswordProps {
    email: string
}

const userForgotPasswordService = async ({ email }: IUserPasswordProps) => {
	const userRepository = AppDataSource.getRepository(User);
    const userEmail = await userRepository.findOneBy({email})
	
    if(!userEmail) {
        throw new AppError(400, "Cannot be processed")
    }

    const code = Math.floor(1000 + Math.random() * 9000)

    const messageEmail: IEmailRequest = {
        subject: "Reset password confirmation - Motors-Shop",
        code: code,
        to: email
    }

    await sendEmail(messageEmail)

    const expiryDate = Date.now() + 60 * 1000 * 20

    userEmail.reset_password_token = code.toString();
    userEmail.reset_password_expires = new Date(expiryDate)

    await userRepository.save(userEmail)


    return { code, expiryDate }
};

export default userForgotPasswordService;