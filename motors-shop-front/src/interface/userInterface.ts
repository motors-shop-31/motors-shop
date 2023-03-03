import { IAddress } from "./addressInterface";

export interface IUser {
  id: string;
  email: string;
  name: string;
  password: string;
  cpf: string;
  birthday: string;
  tel: string;
  description: string;
  account_type: string;
  date_creation: string;
  date_update: string;
  address: IAddress;
}
