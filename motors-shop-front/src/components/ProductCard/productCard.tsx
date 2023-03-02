import { Conteiner } from "./styled";

import { IDataCard } from "../../interface/productArray";

import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../contexts/modalContext";
import ModalFormEdit from "../ModalEdit";

interface props {
  arrayProduto: IDataCard[];
  anuncianteCard: boolean;
  myAds: boolean;
}

export const ProductCard = ({ arrayProduto, anuncianteCard, myAds }: props) => {
  // console.log(arrayProduto);

  const carrosel = useRef<any>();
  const [width, setWidth] = useState(0);
  const { modal, openModal } = useContext(AuthContext);
  

  useEffect(() => {
    setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth);
  });

  return (
    <Conteiner>
      {modal === true ? <ModalFormEdit/> : null }
      <motion.div ref={carrosel} className="carroselConteiner">
        <motion.ul drag="x" dragConstraints={{ right: 0, left: -width }}>
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
              <motion.li key={id}>
                <figure className="conteiner--cart">
                  <img
                    src={cover_image}
                    alt="Imagen do veiculo sendo vendido"
                  />
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
                {!myAds ? (
                  <figure className="conteiner--logo">
                    <img alt="" className="logo" />
                    <p className="body-2-500">Anuciante</p>
                  </figure>
                ) : (
                  <></>
                )}

                <div className="conteiner--info">
                  <div>
                    <p className="km">{mileage} KM</p>
                    <p className="year">{year}</p>
                  </div>
                  <p className="Heading-7-500 price">R$ {price}</p>
                </div>
                {myAds ? (
                  <div className="conteinerEdit">
                    <button onClick={() => openModal()}className="medium Outline1">Editar</button>
                    <button className="medium Outline1">Ver como</button>
                  </div>
                ) : (
                  <></>
                )}
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </Conteiner>
  );
};
