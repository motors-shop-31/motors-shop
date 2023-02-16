import React from "react";
import { ProductCard } from "./components/productCard/productCard";
import { GlobalStyle } from "./styles";
import { FontsStyle } from "./styles/fonts";

import { IDataCardFake } from "./interface/productArray";

const data: IDataCardFake[] = [
  {
    img: "https://res.cloudinary.com/ddiduqrz0/image/upload/v1676555339/car_iww7cp.png",
    title:
      "Product title stays here - max 1 line Product title stays here -maximum 1 line",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem asdas dd sad s asdaassssss",
    logo: "",
    km: "13",
    year: "2019",
    price: "00.00,00",
    status: true,
  },
  {
    img: "https://res.cloudinary.com/ddiduqrz0/image/upload/v1676555339/car_iww7cp.png",
    title:
      "Product title stays here - max 1 line Product title stays here -maximum 1 line",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem asdas dd sad s asdaassssss",
    logo: "",
    km: "15",
    year: "2019",
    price: "00.00,00",
    status: false,
  },
  {
    img: "https://res.cloudinary.com/ddiduqrz0/image/upload/v1676555339/car_iww7cp.png",
    title:
      "Product title stays here - max 1 line Product title stays here -maximum 1 line",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem asdas dd sad s asdaassssss",
    logo: "",
    km: "15",
    year: "2019",
    price: "00.00,00",
    status: false,
  },
];

function App() {
  return (
    <>
      <GlobalStyle />
      <FontsStyle />
      <ProductCard arrayProduto={data} anuncianteCard={false} />

      <div>dasdas</div>
    </>
  );
}

export default App;
