import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IProductList } from "../../interfaces/product.interfaces";

const productGetUserService = async (userId: string): Promise<IProductList> => {
  const productRepository = AppDataSource.getRepository(Product);
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: userId });
  const product = await productRepository.find();

  const products: Product[] = [];

  product.forEach((item) => {
    if (item.user.id === user!.id) {
      products.push(item);
    }
  });

  if (!user) {
    throw new AppError(400, "User not found");
  }
  if (!product) {
    throw new AppError(400, "Products not found");
  }

  return {
    message: "listen",
    data: products,
  };
};

export default productGetUserService;
