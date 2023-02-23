import { Conteiner } from "./styled";

import { IDataCardFake } from "../../interface/productArray";

interface props {
  arrayProduto: IDataCardFake[];
  anuncianteCard: boolean;
}

export const ProductCard = ({ arrayProduto, anuncianteCard }: props) => {
  return (
    <Conteiner>
      <ul>
        {arrayProduto.map((vehicle) => {
          const { description, img, km, logo, price, title, year, status } =
            vehicle;

          const anuncioStatus = status ? "Ativo" : "Inativo";

          return (
            <li>
              <figure className="conteiner--cart">
                <img src={img} alt="" />
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
                <img src={logo} alt="" className="logo" />
                <p className="body-2-500">Anuciante</p>
              </figure>

              <div className="conteiner--info">
                <div>
                  <p className="km">{km} KM</p>
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
