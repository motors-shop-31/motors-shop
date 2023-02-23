import { IAddressCreate } from "./address.interfaces";

interface ICreateUser {
  email: string;
  name: string;
  password: string;
  cpf: number;
  birthday: Date;
  tel: number;
  description?: string;
  account_type: string;
  address: IAddressCreate;
}

interface IUser{
  email: string;
  name: string;
  tel: number;
  description?: string;
  account_type: string;
  address: IAddressCreate;
}

interface IUpdateUser {
  email?: string;
  name?: string;
  password?: string;
  cpf?: number;
  birthday?: string;
  tel?: number;
  description?: string;
  account_type?: string;
  address?: IAddressCreate;
}

interface ILogin {
  name: string;
  password: string;
}

interface ITokenInfo {
  id: string;
}

export { ICreateUser, ILogin, ITokenInfo, IUpdateUser, IUser };
