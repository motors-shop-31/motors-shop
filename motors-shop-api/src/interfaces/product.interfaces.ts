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

export { IProductCreate };
