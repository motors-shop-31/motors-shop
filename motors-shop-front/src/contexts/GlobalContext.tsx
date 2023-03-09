import { createContext, useState } from "react";
import { useParams } from "react-router-dom";
import { IComments, IDataCard } from "../interface/productArray";
import api from "../service/api";

interface ProvidersProps {
  children: React.ReactNode;
}

interface IPros {
  product: IDataCard;
  setProduct: React.Dispatch<React.SetStateAction<IDataCard>>;
  logged: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
  commets: IComments[];
  setCommets: React.Dispatch<React.SetStateAction<IComments[]>>;
  listComment: any;
}

export const GlobalContext = createContext({} as IPros);

const ContextProvider = ({ children }: ProvidersProps) => {
  const [product, setProduct] = useState({} as IDataCard);
  const [logged, setLogged] = useState(false);
  const [commets, setCommets] = useState<IComments[]>([]);

  function listComment(id: string): any {
    setTimeout(() => {
      api.get(`/comments/${id}`).then(({ data }) => {
        setCommets(data);
      });
    }, 250);
  }

  return (
    <GlobalContext.Provider
      value={{
        product,
        setProduct,
        logged,
        setLogged,
        commets,
        setCommets,
        listComment,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
