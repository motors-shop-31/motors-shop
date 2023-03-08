import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/appError";

const commentsListByProductService = async (productId: string) => {
  const productRepository = AppDataSource.getRepository(Product);

  const product = await productRepository.findOneBy({ id: productId });

  if (!product) {
    throw new AppError(400, "Product not find");
  }

  return product?.comments;
};

export default commentsListByProductService;
