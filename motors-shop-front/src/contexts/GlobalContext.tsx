import { createContext, useState } from "react";
import { IDataCard } from "../interface/productArray";

interface ProvidersProps {
  children: React.ReactNode;
}

interface IPros {
  product: IDataCard;
  setProduct: React.Dispatch<React.SetStateAction<IDataCard>>;
  logged: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = createContext({} as IPros);

const ContextProvider = ({ children }: ProvidersProps) => {
  const [product, setProduct] = useState({} as IDataCard);
  const [logged, setLogged] = useState(false);

  return (
    <GlobalContext.Provider value={{ product, setProduct, logged, setLogged }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
