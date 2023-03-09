import { useContext, useEffect, useState } from "react";
import { AuctionCard } from "../../components/AuctionCard";
import Footer from "../../components/Footer";
import ModalForm from "../../components/ModalCreate";
import Navbar from "../../components/Navbar";
import { ProductCard } from "../../components/ProductCard/productCard";
import { AuthContext } from "../../contexts/modalContext";
import { IDataCard } from "../../interface/productArray";

import { IUser } from "../../interface/userInterface";
import { getAllProduct } from "../../service/product/getAllProduct";
import { getUser } from "../../service/user/getUser";
import { Background, Conteiner } from "./styles";

const SellerAd = () => {
  const [productCart, setProductCart] = useState<IDataCard[]>([]);
  const [productMotorbike, setProductMotorbike] = useState<IDataCard[]>([]);
  const [user, setUser] = useState({} as IUser);
  const { modal, openModal } = useContext(AuthContext);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    getUser(localStorage.getItem("token")!).then((res) => {
      console.log(res.data);
      setUser(res.data);
    });
    getAllProduct()
      .then(({ data }) => {
        const cart: IDataCard[] = [];
        const bike: IDataCard[] = [];
        data.forEach((product: IDataCard) => {
          if (product.user.id === userId) {
            product.vehicle === "car" ? cart.push(product) : bike.push(product);
          }
        });

        setProductCart(cart);
        setProductMotorbike(bike);
      })
      .catch((err) => console.log(err));

    const tokenJson = localStorage.getItem("token");
    if (tokenJson) {
      getUser(tokenJson)
        .then((res) => {
          setUser(res.data);
        })
        .catch((e) => {
          window.localStorage.clear();
          setUser({} as IUser);
        });
    }
  }, []);

  return (
    <Background>
      {modal ? (
        <ModalForm
          setProductCart={setProductCart}
          setProductMotorbike={setProductMotorbike}
        />
      ) : null}
      <Conteiner>
        <Navbar />
        <div className="backGroudHeader"></div>
        <div className="advertiserCard">
          <p className="seller">{localStorage.getItem("userNameLogo")}</p>
          <div className="sellerConteiner">
            <p className="Heading-6-600">{user.name}</p>
            <p className="sellerType">Anunciante</p>
          </div>
          <p className="body-1-400 description">{user.description}</p>
          <button
            type="button"
            onClick={() => openModal()}
            className="big outlineBrand1"
          >
            Criar anuncio
          </button>
        </div>

        <h2 className="Heading-5-600 tipo" id="leilao">
          leilão
        </h2>
        <ul className="leilaoConteiner">
          <li>
            <AuctionCard myAds={true} />
          </li>
          <li>
            <AuctionCard myAds={true} />
          </li>
          <li>
            <AuctionCard myAds={true} />
          </li>
        </ul>

        <h2 className="Heading-5-600 tipo" id="carros">
          Carros
        </h2>

        <ProductCard
          arrayProduto={productCart}
          anuncianteCard={true}
          myAds={true}
          buttonHandler={openModal}
        />

        <h2 className="Heading-5-600 tipo" id="motos">
          Motos
        </h2>

        <ProductCard
          arrayProduto={productMotorbike}
          anuncianteCard={true}
          myAds={true}
          buttonHandler={openModal}
        />

        <Footer />
      </Conteiner>
    </Background>
  );
};

export { SellerAd };
