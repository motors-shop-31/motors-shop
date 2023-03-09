import AppDataSource from "../../data-source";
import { Image } from "../../entities/image.entity";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/appError";

import {
  IProductResponse,
  IProductUpdate,
} from "../../interfaces/product.interfaces";

const productUpdateService = async (
  {
    type,
    title,
    year,
    mileage,
    price,
    description,
    vehicle,
    published,
    cover_image,
    image,
  }: IProductUpdate,
  id: string
): Promise<IProductResponse> => {
  const productsRepository = AppDataSource.getRepository(Product);
  const imageRepository = AppDataSource.getRepository(Image);
  const findProduct = await productsRepository.findOneBy({ id });

  if (!findProduct) {
    throw new AppError(400, "Product does not exist");
  }

  await productsRepository.update(id, {
    type: type ? type : findProduct.type,
    title: title ? title : findProduct.title,
    year: year ? year : findProduct.year,
    mileage: mileage ? mileage : findProduct.mileage,
    price: price ? price : findProduct.price,
    description: description ? description : findProduct.description,
    vehicle: vehicle ? vehicle : findProduct.vehicle,
    published: published ? published : findProduct.published,
    cover_image: cover_image ? cover_image : findProduct.cover_image,
  });

  image?.forEach(async (data: any) => {
    if (data.id == undefined) {
      const newImage = imageRepository.create({
        image: data.image,
        product: findProduct,
      });
      await imageRepository.save(newImage);
    }
    const findImage = await imageRepository.findOneBy({ id: data.id });
    if (findImage) {
      if (data.image == false) {
        await imageRepository
          .createQueryBuilder("users")
          .delete()
          .from(Image)
          .where("id = :id", { id: data.id })
          .execute();
      } else {
        await imageRepository
          .createQueryBuilder()
          .update(Image)
          .set({ image: data.image })
          .where("id = :id", { id: data.id })
          .execute();
      }
    } else {
      // throw new AppError(400, `image id not found`);
    }
  });

  const product = await productsRepository.findOneBy({ id });

  return {
    message: "Updated product",
    data: product!,
  };
};

export default productUpdateService;
