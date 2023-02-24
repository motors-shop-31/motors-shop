import { IAddressCreate } from "./address.interfaces";

interface ICreateUser {
  email: string;
  name: string;
  password: string;
  cpf: string;
  birthday: Date;
  tel: string;
  description?: string;
  account_type: string;
  address: IAddressCreate;
}

interface IUpdateUser {
  email?: string;
  name?: string;
  password?: string;
  cpf?: string;
  birthday?: string;
  tel?: string;
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

export { ICreateUser, ILogin, ITokenInfo, IUpdateUser };
