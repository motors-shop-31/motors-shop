import AppDataSource from "../../data-source";

import { ICreateComments } from "../../interfaces/comments.interfaces";

import { AppError } from "../../errors/appError";

import { Comments } from "../../entities/comments.entity";
import { Product } from "../../entities/product.entity";
import { User } from "../../entities/user.entity";

const commentsCreateService = async (
  { idProduct, text }: ICreateComments,
  idUser: string
) => {
  const commentsRepository = AppDataSource.getRepository(Comments);
  const productRepository = AppDataSource.getRepository(Product);
  const userRepository = AppDataSource.getRepository(User);

  const product = await productRepository.findOneBy({ id: idProduct });

  const user = await userRepository.findOneBy({ id: idUser });

  const comment = await commentsRepository.save({
    text,
    product: product!,
    user: user!,
  });

  return comment;
};

export default commentsCreateService;
