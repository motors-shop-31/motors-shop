import { IAddress } from "./addressInterface";

export interface IUser {
  id?: string;
  email: string;
  name: string;
  password: string;
  cpf: string;
  birthday: string;
  tel: string;
  description: string;
  account_type: boolean;
  date_creation?: string;
  date_update?: string;
  address?: IAddress;
}

export interface IUserRegister {
  email: string;
  name: string;
  password: string;
  cpf: string;
  birthday: string;
  tel: string;
  description: string;
  account_type: boolean;
  cep: number;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
}
