import AppDataSource from "../../data-source";

import { User } from "../../entities/user.entity";
import { Address } from "../../entities/address.entity";

import { ICreateUser } from "../../interfaces/user.interfaces";

import { AppError } from "../../errors/appError";

const userCreateService = async ({ address, ...data }: ICreateUser) => {
  const userRepository = AppDataSource.getRepository(User);
  const addressRepository = AppDataSource.getRepository(Address);

  const userEmailExist = await userRepository.findOne({
    where: { email: data.email },
  });

  const userNameExist = await userRepository.findOne({
    where: { name: data.name },
  });

  if (userEmailExist && userNameExist) {
    throw new AppError(400, "E-mail and name already registered");
  } else if (userEmailExist) {
    throw new AppError(400, "E-mail already registered");
  } else if (userNameExist) {
    throw new AppError(400, "Name already registered");
  }

  const newAddress = addressRepository.create(address);
  await addressRepository.save(newAddress);
  
  const newUser = userRepository.create({ address: newAddress, ...data });
  await userRepository.save(newUser);

  const { password, ...user } = newUser;

  return user;
};

export default userCreateService;
