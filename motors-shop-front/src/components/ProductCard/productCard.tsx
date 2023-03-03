import { Conteiner } from "./styled";

import { IDataCard } from "../../interface/productArray";

import { motion } from "framer-motion";

import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../contexts/modalContext";
import ModalFormEdit from "../ModalEdit";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { LogoName } from "../../pages/ProductPage/styles";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";


interface props {
  arrayProduto: IDataCard[];
  anuncianteCard: boolean;
  myAds: boolean;
}

export const ProductCard = ({ arrayProduto, anuncianteCard, myAds }: props) => {
  const carrosel = useRef<any>();
  const [width, setWidth] = useState(0);
  const { modal, openModal } = useContext(AuthContext);
  

  let widthMove = 0;

  const Navigate = useNavigate();

  const { setProduct } = useContext(GlobalContext);

  // console.log(page);

  const color = useMemo(() => {
    return "--random" + Math.floor(Math.random() * (12 - 0) + 1);
  }, []);

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
              user,
            } = vehicle;

            let firstLetter = user.name
              .trim()
              .split(" ")[0][0]
              ?.toLocaleUpperCase();
            let secondLetter = "";

            if (user.name.split(" ").length > 1) {
              secondLetter = user.name.split(" ")[1][0]?.toLocaleUpperCase();
            }

            if (!secondLetter) {
              secondLetter = "";
            }

            const anuncioStatus = published ? "Ativo" : "Inativo";

            return (
              <motion.li
                key={id}
                onMouseDown={(e) => {
                  widthMove = e.clientX;
                }}
                onMouseUp={(e) => {
                  const dif = Math.abs(widthMove - e.clientX);
                  setProduct(vehicle);
                  if (dif < 5) Navigate("/product", { replace: false });
                }}
              >
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
                  <div className="conteiner--logo">
                    <LogoName color={color}>
                      {`${firstLetter}${secondLetter}`.trim()}
                    </LogoName>
                    <p className="body-2-500">{user.name}</p>
                  </div>
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
