import { Conteiner } from "./styled";

import { IDataCard } from "../../interface/productArray";

interface props {
  arrayProduto: IDataCard[];
  anuncianteCard: boolean;
}

export const ProductCard = ({ arrayProduto, anuncianteCard }: props) => {
  // console.log(arrayProduto);
  return (
    <Conteiner>
      <ul>
        {arrayProduto.map((vehicle) => {
          const {
            description,
            cover_image,
            mileage,
            price,
            title,
            year,
            published,
            id,
          } = vehicle;

          const anuncioStatus = published ? "Ativo" : "Inativo";

          return (
            <li key={id}>
              <figure className="conteiner--cart">
                <img src={cover_image} alt="Imagen do veiculo sendo vendido" />
                {anuncianteCard ? (
                  <p className={`anuncioStatus ${anuncioStatus}`}>
                    {anuncioStatus}
                  </p>
                ) : (
                  <></>
                )}
              </figure>
              <p className="Heading-7-600 title">{title}</p>

              <p className="body-2-400 description">{description}</p>
              <figure className="conteiner--logo">
                <img alt="" className="logo" />
                <p className="body-2-500">Anuciante</p>
              </figure>

              <div className="conteiner--info">
                <div>
                  <p className="km">{mileage} KM</p>
                  <p className="year">{year}</p>
                </div>
                <p className="Heading-7-500 price">R$ {price}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Conteiner>
  );
};
