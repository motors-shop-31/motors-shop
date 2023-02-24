import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuctionCard } from "../../components/AuctionCard";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { ProductCard } from "../../components/ProductCard/productCard";
import { IDataCard } from "../../interface/productArray";
import { getAllProduct } from "../../service/product/getAllProduct";
import { Conteiner } from "./styles";

const SellerAd = () => {
  const [productCart, setProductCart] = useState<IDataCard[]>([]);
  const [productMotorbike, setProductMotorbike] = useState<IDataCard[]>([]);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    getAllProduct()
      .then(({ data }) => {
        const cart: IDataCard[] = [];
        const bike: IDataCard[] = [];
        data.forEach((product: IDataCard) => {
          if (product.user.id === userId) {
            product.vehicle === "carro"
              ? cart.push(product)
              : bike.push(product);
          }
        });

        setProductCart(cart);
        setProductMotorbike(bike);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Conteiner>
      <Navbar />
      <div className="backGroudHeader"></div>
      <div className="advertiserCard">
        <p className="seller">SL</p>
        <div className="sellerConteiner">
          <p className="Heading-6-600">Samuel Leão</p>{" "}
          <p className="sellerType">Anunciante</p>
        </div>
        <p className="body-1-400 description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>

        <button className="big outlineBrand1">Criar anuncio</button>
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
        anuncianteCard={false}
        myAds={true}
      />

      <h2 className="Heading-5-600 tipo" id="motos">
        Motos
      </h2>
      <ProductCard
        arrayProduto={productMotorbike}
        anuncianteCard={false}
        myAds={true}
      />

      <Footer />
    </Conteiner>
  );
};

export { SellerAd };
