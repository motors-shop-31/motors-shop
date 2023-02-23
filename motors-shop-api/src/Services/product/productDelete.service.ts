import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";

import { AppError } from "../../errors/appError";


const productDeleteService = async ( id : string): Promise<any> => { 
    const productRepository = AppDataSource.getRepository(Product);

    const findProduct = await productRepository.findOneBy({ id });

    if(!findProduct){ throw new AppError(400, "Product not found" ) };
    await productRepository.save(findProduct);
    
    const message = { 
        message: "Product disabled",
        statusCode: 200
    };

    return message;
};

export default productDeleteService;