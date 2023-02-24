import {
  BackgroundPurple,
  Container,
  InfoProduct,
  Description,
  PhotosProduct,
  ProfileProduct,
  Comments,
  LogoName,
} from "./styles";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export const ProductPage = () => {
  return (
    <>
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
                  src="https://s2.glbimg.com/RL7sN_k9FVLGtaeK-nx4AtjRgqA=/0x0:2540x1693/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/h/l/4oOMchSDqa6sJkL4a9Tg/ftypefrente.jpg"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://s2.glbimg.com/RL7sN_k9FVLGtaeK-nx4AtjRgqA=/0x0:2540x1693/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/h/l/4oOMchSDqa6sJkL4a9Tg/ftypefrente.jpg"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://s2.glbimg.com/RL7sN_k9FVLGtaeK-nx4AtjRgqA=/0x0:2540x1693/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/h/l/4oOMchSDqa6sJkL4a9Tg/ftypefrente.jpg"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://s2.glbimg.com/RL7sN_k9FVLGtaeK-nx4AtjRgqA=/0x0:2540x1693/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/h/l/4oOMchSDqa6sJkL4a9Tg/ftypefrente.jpg"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://s2.glbimg.com/RL7sN_k9FVLGtaeK-nx4AtjRgqA=/0x0:2540x1693/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/h/l/4oOMchSDqa6sJkL4a9Tg/ftypefrente.jpg"
                  alt=""
                />
              </li>
              <li>
                <img
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
          <div className="container-comment">
            <div className="container-info">
              <LogoName
                color={"--random" + Math.floor(Math.random() * (12 - 0) + 1)}
              >
                JL
              </LogoName>
              <h3 className="body-2-500">Júlia Lima</h3>
              <h4>há 3 dias</h4>
            </div>
            <p className="body-2-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="container-comment">
            <div className="container-info">
              <LogoName
                color={"--random" + Math.floor(Math.random() * (12 - 0) + 1)}
              >
                MA
              </LogoName>
              <h3 className="body-2-500">Marcos Antônio</h3>
              <h4>há 7 dias</h4>
            </div>
            <p className="body-2-400">Lorem Ipsum is simply</p>
          </div>
          <div className="container-comment">
            <div className="container-info">
              <LogoName
                color={"--random" + Math.floor(Math.random() * (12 - 0) + 1)}
              >
                CS
              </LogoName>
              <h3 className="body-2-500">Camila Silva</h3>
              <h4>há 1 mês</h4>
            </div>
            <p className="body-2-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </Comments>
      <Footer />
    </>
  );
};
