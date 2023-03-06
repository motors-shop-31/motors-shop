import AppDataSource from "../../data-source";
import { Comments } from "../../entities/comments.entity";
import { Product } from "../../entities/product.entity";

const commentsListByProductService = async (productId: string) => {
  const productRepository = AppDataSource.getRepository(Product);
  const commentsRepository = AppDataSource.getRepository(Comments);

  const product = await productRepository.findOneBy({ id: productId });

  let comments;

  if (product) {
    comments = await commentsRepository.find();
  }

  return comments;
};

export default commentsListByProductService;
