import { fadeConfig } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuctionCard } from "../../components/AuctionCard";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { ProductCard } from "../../components/ProductCard/productCard";
import { IDataCard } from "../../interface/productArray";
import { IUser } from "../../interface/userInterface";
import { getAllProduct } from "../../service/product/getAllProduct";
import { Conteiner } from "./styles";

const SellerUserAd = () => {
  const [productCart, setProductCart] = useState<IDataCard[]>([]);
  const [productMotorbike, setProductMotorbike] = useState<IDataCard[]>([]);
  const [userProduct, setUserProduct] = useState<IUser>({} as IUser);

  const { id } = useParams();

  useEffect(() => {
    getAllProduct()
      .then(({ data }) => {
        const cart: IDataCard[] = [];
        const bike: IDataCard[] = [];
        data.forEach((product: IDataCard) => {
          if (product.user.id === id) {
            product.vehicle === "carro"
              ? cart.push(product)
              : bike.push(product);
          }
        });

        setProductCart(cart);
        setProductMotorbike(bike);

        if (cart.length > 0) {
          setUserProduct(cart[0].user);
        } else {
          setUserProduct(bike[0].user);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(userProduct);

  return (
    <Conteiner>
      <Navbar />
      <div className="backGroudHeader"></div>
      <div className="conteinerAdvertiserCard">
        <div className="advertiserCard">
          <p className="seller">SL</p>
          <div className="sellerConteiner">
            <p className="Heading-6-600">{userProduct.name}</p>
            <p className="sellerType">Anunciante</p>
          </div>
          <p className="body-1-400 description">{userProduct.description}</p>
        </div>
      </div>

      <h2 className="Heading-5-600 tipo" id="carros">
        Carros
      </h2>
      <ProductCard
        arrayProduto={productCart}
        anuncianteCard={true}
        myAds={false}
      />

      <h2 className="Heading-5-600 tipo" id="motos">
        Motos
      </h2>
      <ProductCard
        arrayProduto={productMotorbike}
        anuncianteCard={true}
        myAds={false}
      />

      <Footer />
    </Conteiner>
  );
};

export { SellerUserAd };
