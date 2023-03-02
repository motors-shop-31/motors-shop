import AppDataSource from "../../data-source";

import { Address } from "../../entities/address.entity";
import { User } from "../../entities/user.entity";

import { AppError } from "../../errors/appError";

import { IAddressUpdate } from "../../interfaces/address.interfaces";

const addressUpdateService = async (
  { cep, city, complement, number, state, street }: IAddressUpdate,
  id: string
) => {
  const userRepository = AppDataSource.getRepository(User);
  const addressRepository = AppDataSource.getRepository(Address);

  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError(400, "Address not found");
  }

  await addressRepository.update(id, {
    cep: cep ? cep : user.address.cep,
    city: city ? city : user.address.city,
    complement: complement ? complement : user.address.complement,
    number: number ? number : user.address.number,
    state: state ? state : user.address.state,
    street: street ? street : user.address.street,
  });

  const addressUpdate = await addressRepository.find({
    where: {
      id: user.address.id,
    },
  });

  return addressUpdate;
};

export default addressUpdateService;
