interface ICreateComments {
  idProduct: string;
  text: string;
}

interface IUpdateComments {
  text?: string;
}

export { ICreateComments, IUpdateComments };
