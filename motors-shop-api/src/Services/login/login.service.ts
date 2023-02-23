import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { compare } from "bcrypt";

import jwt from "jsonwebtoken";
import { AppError } from "../../errors/appError";
import { ILogin } from "../../interfaces/user.interfaces";

const loginService = async ({ name, password }: ILogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const userExist = await userRepository.findOne({
    where: { name: name },
  });

  if (!userExist) {
    throw new AppError(400, "Invalid user or password");
  }

  const passwordMatch = await compare(password, userExist.password);

  if (!passwordMatch) {
    throw new AppError(400, "Invalid user or password");
  }

  const token = jwt.sign(
    {
      id: userExist.id,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: userExist.id,
    }
  );

  return { token: token };
};

export default loginService;
