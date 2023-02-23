import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/appError";

import { IProductResponse, IProductUpdate } from "../../interfaces/product.interfaces";



const productUpdateService = async (
  { type,
    title,
    year,
    mileage,
    price,
    description,
    vehicle,
    published,
    cover_image }:IProductUpdate,
  id: string):Promise<IProductResponse> => {
  const productsRepository = AppDataSource.getRepository(Product);
  const findProduct = await productsRepository.findOneBy({ id });

  if (!findProduct) { throw new AppError(400, "Product does not exist") };

  await productsRepository.update(id, {
    type : type ? type : findProduct.type,
    title : title ? title : findProduct.title,
    year: year ? year : findProduct.year,
    mileage: mileage ? mileage : findProduct.mileage,
    price: price ? price : findProduct.price,
    description: description ? description : findProduct.description,
    vehicle: vehicle ? vehicle : findProduct.vehicle,
    published: published ? published : findProduct.published,
    cover_image: cover_image ? cover_image : findProduct.cover_image
  });

  const product = await productsRepository.findOneBy({ id });

  return {
    message: "Updated product",
    data: product!
  };
};

export default productUpdateService;