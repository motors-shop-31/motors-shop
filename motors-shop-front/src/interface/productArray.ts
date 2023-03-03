import { IUser } from "./userInterface";

export interface IDataCard {
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
  date_creation: string;
  date_update: string;
  user: IUser;

  //A fazer ainda
  image?: any;
  comments?: any;
}

