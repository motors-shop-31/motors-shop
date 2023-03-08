import {
  BackgroundPurple,
  Container,
  InfoProduct,
  Description,
  PhotosProduct,
  ProfileProduct,
  Comments,
  InputComments,
  Figure,
  Issoai,
} from "./styles";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useContext, useEffect, useState } from "react";
import { CommentsProduct } from "../../components/CommentsProduct";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import { getAllProduct } from "../../service/product/getAllProduct";
import { IComments, IDataCard } from "../../interface/productArray";
import { getAllcommentsByProduct } from "../../service/product/getAllcommentsByProduct";
import api from "../../service/api";

export const ProductPage = () => {
  const [value, setValue] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [img, setImg] = useState("");

  const [load, setLoad] = useState(false);

  const Navigate = useNavigate();

  const [productCart, setProductCart] = useState<IDataCard>({} as IDataCard);

  const { logged, setCommets, commets, listComment } =
    useContext(GlobalContext);

  const { id } = useParams();

  useEffect(() => {
    getAllProduct()
      .then(({ data }) => {
        data.forEach((product: IDataCard) => {
          if (product.id === id) {
            setProductCart(product);
            setLoad(true);
          }
        });
      })
      .catch((err) => console.log(err));

    getAllcommentsByProduct(id!)
      .then(({ data }) => {
        setCommets(data);
      })
      .catch((err) => console.log(err));
  }, []);

  let logo = window.localStorage.getItem("userNameLogo");
  let userName = window.localStorage.getItem("userName");
  let token = localStorage.getItem("token");

  const {
    description,
    cover_image,
    mileage,
    price,
    title,
    year,
    published,
    user,
    image,
  } = productCart;

  let firstLetterProduc = "";
  let secondLetterProduc = "";

  if (load) {
    firstLetterProduc = user.name.trim().split(" ")[0][0]?.toLocaleUpperCase();

    if (user.name.split(" ").length > 1) {
      secondLetterProduc = user.name.split(" ")[1][0]?.toLocaleUpperCase();
    }
  }

  function createComment() {
    if (value === "") {
      return;
    }
    const data = {
      text: value,
      idProduct: productCart.id,
    };

    api
      .post("/comments", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setValue("");
      })
      .catch(() => {});

    listComment(id);
  }

  return !load ? (
    <></>
  ) : (
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <Issoai>
          <ModalContent
            width={"520px"}
            height={"354px"}
            borderRadius={"8px"}
            className="teste"
          >
            <ModalHeader>Imagem do veículo</ModalHeader>
            <ModalCloseButton />
            <ModalBody
              pb={6}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Figure>
                <img src={img} alt="" />
              </Figure>
            </ModalBody>
          </ModalContent>
        </Issoai>
      </Modal>
      <Navbar />
      <BackgroundPurple />
      <Container>
        <section className="section-main">
          <figure>
            <img src={cover_image} alt="" />
          </figure>
          <InfoProduct>
            <h2 className="Heading-6-600 ">{title}</h2>
            <div>
              <h3 className="body-2-500">{year}</h3>
              <h3 className="body-2-500">{mileage} KM</h3>
            </div>
            <h4 className="Heading-7-500">
              {price !== undefined
                ? price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                : null}
            </h4>
            <button className="brand1">Comprar</button>
          </InfoProduct>
          <Description>
            <h2 className="Heading-6-600">Descrição</h2>
            <p className="body-1-400">{description}</p>
          </Description>
        </section>
        <section className="section-fixed">
          <PhotosProduct>
            <h2>Fotos</h2>
            <ul>
              {image?.map((img: any) => {
                return (
                  <li key={img.id}>
                    <img
                      onClick={() => {
                        setImg(img.image);
                        onOpen();
                      }}
                      src={img.image}
                      alt=""
                    />
                  </li>
                );
              })}
            </ul>
          </PhotosProduct>
          <ProfileProduct>
            <div>{`${firstLetterProduc}${secondLetterProduc}`.trim()}</div>
            <h2>{user.name}</h2>
            <p>{user.description}</p>
            <button
              className="grey1"
              onClick={() => Navigate(`/seller/${user.id}`, { replace: false })}
            >
              Ver todos anuncios
            </button>
          </ProfileProduct>
        </section>
      </Container>
      <Comments>
        <div className="container">
          <h2 className="Heading-6-600">Comentários</h2>

          {commets.length ? (
            commets.map((item: IComments) => {
              console.log(item);
              return (
                <CommentsProduct
                  date_update={item.date_update}
                  date_create={item.date_creation}
                  description={item.text}
                  name={item.user.name}
                  key={item.id}
                  id={item.user.id}
                  idComment={item.id}
                />
              );
            })
          ) : (
            <div className="comments-empty">
              <h3 className="Heading-7-500">
                Este veículo ainda não possuí comentários
              </h3>
              <h3 className="Heading-7-500">Seja o primeiro a comentar!</h3>
            </div>
          )}
        </div>
      </Comments>
      <InputComments>
        <div className="container">
          <div className="div-name">
            {logged ? (
              <>
                <div>{logo}</div>
                <h3 className="body-2-500">{userName}</h3>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="div-input">
            <textarea
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            {logged ? (
              <button className="brand1" onClick={createComment}>
                Comentar
              </button>
            ) : (
              <button
                className="disable"
                onClick={() => Navigate("/login", { replace: true })}
              >
                Comentar
              </button>
            )}
          </div>
          <div className="div-buttons">
            <button
              onClick={(e) => {
                setValue(`${value} Gostei muito!`);
              }}
            >
              Gostei muito!
            </button>
            <button
              onClick={(e) => {
                setValue(`${value} Incrível`);
              }}
            >
              Incrível
            </button>
            <button
              onClick={(e) => {
                setValue(`${value} Recomendarei para meus amigos!`);
              }}
            >
              Recomendarei para meus amigos!
            </button>
          </div>
        </div>
      </InputComments>
      <Footer />
    </>
  );
};
