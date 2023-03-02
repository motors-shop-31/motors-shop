import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";

const commentsListByProductService = async (productId: string) => {
  const productRepository = AppDataSource.getRepository(Product);

  const product = await productRepository.findOneBy({ id: productId });

  return product?.comments;
};

export default commentsListByProductService;
