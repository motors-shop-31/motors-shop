import { User } from "./../../entities/user.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";

interface IUserVerifyPwProps {
    code: number
}

const userVerifyPwService = async ({ code }: IUserVerifyPwProps) => {
	const userRepository = AppDataSource.getRepository(User);
    const userCode = await userRepository.findOneBy({reset_password_token: code.toString()})
	
    if(!userCode) {
        throw new AppError(400, "Cannot be processed")
    }

    if(code !== +userCode.reset_password_token){
        throw new AppError(401, "Invalid code")
    }

    return userCode
};

export default userVerifyPwService;