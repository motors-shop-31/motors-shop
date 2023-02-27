import AppDataSource from "../../data-source";
import { Image } from "../../entities/image.entity";
import { Product } from "../../entities/product.entity";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const productDeleteService = async ( id : string): Promise<any> => { 
    const productRepository = AppDataSource.getRepository(Product) 
    const imageRepository = AppDataSource.getRepository(Image)
    const produto = await productRepository.findOne({where: { id }})
    const imagens = produto?.image;

    if(imagens?.length){
        for(let i = 0; i < imagens?.length; i++){
            await imageRepository.delete(imagens[i].id);
        }
    }

    await productRepository
    .createQueryBuilder("product")
    .delete()
    .from(Product)
    .where("id =:id", { id })
    .execute();

    return true;
};

export default productDeleteService;