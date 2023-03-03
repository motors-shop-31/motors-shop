import AppDataSource from "../../data-source";

import { hashSync } from "bcrypt";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUpdateUser } from "../../interfaces/user.interfaces";

const userUpdateService = async (
  {
    account_type,
    birthday,
    cpf,
    description,
    email,
    name,
    password,
    tel,
  }: IUpdateUser,
  id: string
) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError(400, "User not found");
  }

  await userRepository.update(id, {
    name: name ? name : user.name,
    email: email ? email : user.email,
    password: password ? hashSync(password, 10) : user.password,
    birthday: birthday ? birthday : user.birthday,
    cpf: cpf ? cpf : user.cpf,
    tel: tel ? tel : user.tel,
    description: description ? description : user.description,
    account_type: account_type ? account_type : user.account_type,
  });

  const userUpdate = await userRepository.findOneBy({ id });

  return userUpdate;
};

export default userUpdateService;
