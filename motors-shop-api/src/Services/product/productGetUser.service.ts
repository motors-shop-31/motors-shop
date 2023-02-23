import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IProductList } from "../../interfaces/product.interfaces";

const productGetUserService = async (user_id: string): Promise<IProductList> => {
    const productRepository = AppDataSource.getRepository(Product);
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({id : user_id})
    const products = await productRepository.find({relations : {user : true}})

    if (!user){
        throw new AppError(400,"User not found")
    }
    if (!products){
        throw new AppError(400,"Cart not found")
    }

    return {
        message: "listed all products for user",
        data: products
    };
};

export default productGetUserService;
