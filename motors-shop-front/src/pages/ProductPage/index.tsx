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
import { useState } from "react";
import { CommentsProduct } from "../../components/CommentsProduct";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const ProductPage = () => {
  const [value, setValue] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [img, setImg] = useState("");
  const [login, Setlogin] = useState(true);

  const Navigate = useNavigate();

  function comment() {
    console.log(value);
    setValue("");
  }

  const array = [
    {
      name: "joao Dantas",
      description: "oi meu nome é joao e eu me chamou joao",
      date: "há 2 dias",
    },
    {
      name: "Clieton",
      description: "oi meu nome é joao e eu me chamou joao",
      date: "há 2 dias",
    },
  ];

  return (
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
            <img
              src="https://s2.glbimg.com/RL7sN_k9FVLGtaeK-nx4AtjRgqA=/0x0:2540x1693/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/h/l/4oOMchSDqa6sJkL4a9Tg/ftypefrente.jpg"
              alt=""
            />
          </figure>
          <InfoProduct>
            <h2 className="Heading-6-600 ">
              Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200{" "}
            </h2>
            <div>
              <h3 className="body-2-500">2013</h3>
              <h3 className="body-2-500">0 KM</h3>
            </div>
            <h4 className="Heading-7-500">R$ 00.000,00</h4>
            <button className="brand1">Comprar</button>
          </InfoProduct>
          <Description>
            <h2 className="Heading-6-600">Descrição</h2>
            <p className="body-1-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Description>
        </section>
        <section className="section-fixed">
          <PhotosProduct>
            <h2>Fotos</h2>
            <ul>
              <li>
                <img
                  onClick={() => {
                    setImg(
                      "https://s2.glbimg.com/RL7sN_k9FVLGtaeK-nx4AtjRgqA=/0x0:2540x1693/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/h/l/4oOMchSDqa6sJkL4a9Tg/ftypefrente.jpg"
                    );
                    onOpen();
                  }}
                  src="https://s2.glbimg.com/RL7sN_k9FVLGtaeK-nx4AtjRgqA=/0x0:2540x1693/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/h/l/4oOMchSDqa6sJkL4a9Tg/ftypefrente.jpg"
                  alt=""
                />
              </li>
              <li>
                <img
                  onClick={() => {
                    setImg(
                      "https://revistacarro.com.br/wp-content/uploads/2022/05/Q3-Sportback-Performance-Black_1.jpg"
                    );
                    onOpen();
                  }}
                  src="https://revistacarro.com.br/wp-content/uploads/2022/05/Q3-Sportback-Performance-Black_1.jpg"
                  alt=""
                />
              </li>
              <li>
                <img
                  onClick={() => {
                    setImg(
                      "https://s2.glbimg.com/RL7sN_k9FVLGtaeK-nx4AtjRgqA=/0x0:2540x1693/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/h/l/4oOMchSDqa6sJkL4a9Tg/ftypefrente.jpg"
                    );
                    onOpen();
                  }}
                  src="https://s2.glbimg.com/RL7sN_k9FVLGtaeK-nx4AtjRgqA=/0x0:2540x1693/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/h/l/4oOMchSDqa6sJkL4a9Tg/ftypefrente.jpg"
                  alt=""
                />
              </li>
              <li>
                <img
                  onClick={() => {
                    setImg(
                      "https://s2.glbimg.com/RL7sN_k9FVLGtaeK-nx4AtjRgqA=/0x0:2540x1693/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/h/l/4oOMchSDqa6sJkL4a9Tg/ftypefrente.jpg"
                    );
                    onOpen();
                  }}
                  src="https://s2.glbimg.com/RL7sN_k9FVLGtaeK-nx4AtjRgqA=/0x0:2540x1693/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/h/l/4oOMchSDqa6sJkL4a9Tg/ftypefrente.jpg"
                  alt=""
                />
              </li>
              <li>
                <img
                  onClick={() => {
                    setImg(
                      "https://s2.glbimg.com/RL7sN_k9FVLGtaeK-nx4AtjRgqA=/0x0:2540x1693/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/h/l/4oOMchSDqa6sJkL4a9Tg/ftypefrente.jpg"
                    );
                    onOpen();
                  }}
                  src="https://s2.glbimg.com/RL7sN_k9FVLGtaeK-nx4AtjRgqA=/0x0:2540x1693/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/h/l/4oOMchSDqa6sJkL4a9Tg/ftypefrente.jpg"
                  alt=""
                />
              </li>
              <li>
                <img
                  onClick={() => {
                    setImg(
                      "https://s2.glbimg.com/RL7sN_k9FVLGtaeK-nx4AtjRgqA=/0x0:2540x1693/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/h/l/4oOMchSDqa6sJkL4a9Tg/ftypefrente.jpg"
                    );
                    onOpen();
                  }}
                  src="https://s2.glbimg.com/RL7sN_k9FVLGtaeK-nx4AtjRgqA=/0x0:2540x1693/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/h/l/4oOMchSDqa6sJkL4a9Tg/ftypefrente.jpg"
                  alt=""
                />
              </li>
            </ul>
          </PhotosProduct>
          <ProfileProduct>
            <div>SL</div>
            <h2>Samuel Leão</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <button className="grey1">Ver todos anuncios</button>
          </ProfileProduct>
        </section>
      </Container>
      <Comments>
        <div className="container">
          <h2 className="Heading-6-600">Comentários</h2>
          {array &&
            array.map((item, i) => {
              return (
                <CommentsProduct
                  date={item.date}
                  description={item.description}
                  name={item.name}
                  key={i}
                />
              );
            })}
        </div>
      </Comments>
      <InputComments>
        <div className="container">
          <div className="div-name">
            {login ? (
              <>
                <div>SL</div>
                <h3 className="body-2-500">Samuel Leão</h3>
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
            {login ? (
              <button className="brand1" onClick={comment}>
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
