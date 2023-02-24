import { Image } from "../entities/image.entity";
import { IUser } from "./user.interfaces";

interface IProductCreate {
  type: string;
  title: string;
  year: number;
  mileage: number;
  price: number;
  description: string;
  vehicle: string;
  published: boolean;
  cover_image: string;
  image: string[];
}

interface IProduct{
  user: IUser,
  id: string;
  type: string;
  title: string;
  year: number;
  mileage: number;
  price: number;
  description: string;
  vehicle: string;
  published: boolean; 
  cover_image: string;
  image: Image[];
}
interface IProductUpdate{
  id: string;
  type?: string;
  title?: string;
  year?: number;
  mileage?: number;
  price?: number;
  description?: string;
  vehicle?: string;
  published?: boolean;
  cover_image?: string;
  image?: Image[];
}

interface IProductList {
  message: string,
  data: IProduct[]
}

interface IProductResponse {
  message: string,
  data: IProductUpdate
}

export { IProductCreate, IProduct, IProductList, IProductUpdate,IProductResponse };
