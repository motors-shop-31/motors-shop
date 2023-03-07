import { IAddressCreate, IAddressUpdate } from "./address.interfaces";

interface ICreateUser {
  email: string;
  name: string;
  password: string;
  cpf: string;
  birthday: Date;
  tel: string;
  description?: string;
  account_type: boolean;
  address: IAddressCreate;
}

interface IUser {
  email: string;
  name: string;
  tel: string;
  description?: string;
  account_type: boolean;
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
  account_type?: boolean;
}

interface ILogin {
  email: string;
  password: string;
}

interface ITokenInfo {
  id: string;
}

export { ICreateUser, ILogin, ITokenInfo, IUpdateUser, IUser };
