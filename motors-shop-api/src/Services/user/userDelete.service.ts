import AppDataSource from "../../data-source";

import { User } from "../../entities/user.entity";
import { Address } from "../../entities/address.entity";
import { ParamsDictionary } from "express-serve-static-core";
import { AppError } from "../../errors/appError";

const userDeleteService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const addressRepository = AppDataSource.getRepository(Address);

  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError(400, "User not found");
  }

  addressRepository.delete(user!.address.id);
  userRepository.delete(user!.id);

  return;
};

export default userDeleteService;
