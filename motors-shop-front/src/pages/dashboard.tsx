import { useEffect, useState } from "react";
import { AuctionCard } from "../components/AuctionCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ProductCard } from "../components/ProductCard/productCard";
import { IDataCard } from "../interface/productArray";
import { getAllProduct } from "../service/product/getAllProduct";
import { Conteiner } from "./styles";

const Dashboard = () => {
  const [productCart, setProductCart] = useState<IDataCard[]>([]);
  const [productMotorbike, setProductMotorbike] = useState<IDataCard[]>([]);

  useEffect(() => {
    getAllProduct()
      .then(({ data }) => {
        const cart: IDataCard[] = [];
        const bike: IDataCard[] = [];
        data.forEach((product: IDataCard) => {
          product.vehicle === "carro" ? cart.push(product) : bike.push(product);
        });

        setProductCart(cart);
        setProductMotorbike(bike);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Conteiner>
      <Navbar />
      <div className="info">
        <div>
          <h1 className="title Heading-3-600">
            Velocidade e experiência em um lugar feito para você
          </h1>
          <p className="description body-1-400">
            Um ambiente feito para você explorar o seu melhor
          </p>
          <div className="buttonConteiner">
            <a href="#carros" className="big Outline1 vehicle">
              Carros
            </a>
            <a href="#motos" className="big Outline1 vehicle">
              Motos
            </a>
          </div>
        </div>
      </div>

      <h2 className="Heading-5-600 tipo" id="leilao">
        leilão
      </h2>
      <ul className="leilaoConteiner">
        <li>
          <AuctionCard />
        </li>
        <li>
          <AuctionCard />
        </li>
        <li>
          <AuctionCard />
        </li>
      </ul>

      <h2 className="Heading-5-600 tipo" id="carros">
        Carros
      </h2>
      <ProductCard arrayProduto={productCart} anuncianteCard={false} />

      <h2 className="Heading-5-600 tipo" id="motos">
        Motos
      </h2>
      <ProductCard arrayProduto={productMotorbike} anuncianteCard={false} />
      <Footer />
    </Conteiner>
  );
};

export { Dashboard };
