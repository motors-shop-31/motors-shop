import { Conteiner } from "./styled";

import { IDataCard } from "../../interface/productArray";

import { motion } from "framer-motion";

import { AuthContext } from "../../contexts/modalContext";
import ModalFormEdit from "../ModalEdit";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { LogoName } from "../../pages/ProductPage/styles";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import { ReactComponent as FrontCarIcon } from "../../assets/front_car.svg";

interface props {
  arrayProduto: IDataCard[];
  anuncianteCard: boolean;
  myAds: boolean;
  buttonHandler?: () => void
}

export const ProductCard = ({ arrayProduto, anuncianteCard, myAds }: props) => {
  const carrosel = useRef<any>();
  const [width, setWidth] = useState(0);
  const { modal, openModal } = useContext(AuthContext);

  let widthMove = 0;

  const Navigate = useNavigate();

  const { setProduct } = useContext(GlobalContext);

  const color = useMemo(() => {
    return "--random" + Math.floor(Math.random() * (12 - 0) + 1);
  }, []);

  useEffect(() => {
    setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth);
  });

  return (
    <Conteiner>
      {arrayProduto.length === 0 ?
        <div className="empty_list_container">
          <h3 className="Heading-7-500">Ops... Parece que ainda não há anúncios por aqui!</h3>
          {anuncianteCard ? <button type='button' onClick={() => openModal()} className="big outlineBrand1">Criar anuncio</button> : null}
        </div>
        :
        (
          <>
            {modal ? <ModalFormEdit /> : null}
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
                        if (dif < 5) Navigate(`/product/${id}`, { replace: false });
                      }}
                    >
                      <figure className="conteiner--cart">
                        {vehicle.cover_image ?
                          <img
                            src={cover_image}
                            alt="Imagem do veiculo sendo vendido"
                          />
                          :
                          <FrontCarIcon className="no_image" />}
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
                        <p className="Heading-7-500 price">
                          {price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </p>
                      </div>
                      {myAds ? (
                        <div className="conteinerEdit">
                          <button
                            onClick={() => openModal()}
                            className="medium Outline1"
                          >
                            Editar
                          </button>
                          <button className="medium Outline1">Ver como</button>
                        </div>
                      ) : (
                        <></>
                      )}
                    </motion.li>
                  );
                }
                )}
              </motion.ul>
            </motion.div>
          </>)
      }
    </Conteiner>
  );
};
