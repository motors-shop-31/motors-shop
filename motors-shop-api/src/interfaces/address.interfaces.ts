interface IAddressCreate {
  cep: number;
  state: string;
  city: string;
  street: string;
  number: string;
  complement?: string;
}

interface IAddressUpdate {
  cep?: number;
  state?: string;
  city?: string;
  street?: string;
  number?: string;
  complement?: string;
}

export { IAddressCreate, IAddressUpdate };
