import { createContext, useState } from "react";
import { IDataCard } from "../interface/productArray";

interface ProvidersProps {
  children: React.ReactNode;
}

interface ITeste {
  product: IDataCard;
  setProduct: React.Dispatch<React.SetStateAction<IDataCard>>;
}

export const GlobalContext = createContext({} as ITeste);

const ContextProvider = ({ children }: ProvidersProps) => {
  const [product, setProduct] = useState({} as IDataCard);

  return (
    <GlobalContext.Provider value={{ product, setProduct }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
