import AppDataSource from "../../data-source";

import { User } from "../../entities/user.entity";

import { IProductCreate } from "../../interfaces/product.interfaces";

import { Product } from "../../entities/product.entity";
import { Image } from "../../entities/image.entity";
import { AppError } from "../../errors/appError";

const productCreateService = async (
  { image, ...product }: IProductCreate,
  id: string
) => {
  const productRepository = AppDataSource.getRepository(Product);
  const userRepository = AppDataSource.getRepository(User);
  const imageRepository = AppDataSource.getRepository(Image);

  const user = await userRepository.findOne({
    where: { id },
  });

  if (!user) {
    throw new AppError(400, "User not found");
  }

  const newProduct = productRepository.create({ user: user, ...product });
  await productRepository.save(newProduct);

  const imagens = image.map((url) => {
    const newImage = imageRepository.create({
      image: url,
      product: newProduct,
    });
    imageRepository.save(newImage);
    return newImage.image;
  });

  return { ...newProduct, imagens };
};

export default productCreateService;
