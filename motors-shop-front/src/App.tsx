import React from "react";
import { GlobalStyle } from "./styles";
import { FontsStyle } from "./styles/fonts";

import { ButtonStyle } from "./styles/button";
import { MainRoute } from "./routes/Route";

// const data: IDataCardFake[] = [
//   {
//     img: "https://res.cloudinary.com/ddiduqrz0/image/upload/v1676555339/car_iww7cp.png",
//     title:
//       "Product title stays here - max 1 line Product title stays here -maximum 1 line",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem asdas dd sad s asdaassssss",
//     logo: "",
//     km: "13",
//     year: "2019",
//     price: "00.00,00",
//     status: true,
//   },
//   {
//     img: "https://res.cloudinary.com/ddiduqrz0/image/upload/v1676555339/car_iww7cp.png",
//     title:
//       "Product title stays here - max 1 line Product title stays here -maximum 1 line",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem asdas dd sad s asdaassssss",
//     logo: "",
//     km: "15",
//     year: "2019",
//     price: "00.00,00",
//     status: false,
//   },
//   {
//     img: "https://res.cloudinary.com/ddiduqrz0/image/upload/v1676555339/car_iww7cp.png",
//     title:
//       "Product title stays here - max 1 line Product title stays here -maximum 1 line",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem asdas dd sad s asdaassssss",
//     logo: "",
//     km: "15",
//     year: "2019",
//     price: "00.00,00",
//     status: false,
//   },
// ];

function App() {
  return (
    <>
      <GlobalStyle />
      <FontsStyle />
      <ButtonStyle />

      <MainRoute />

      {/* <button className="big grey1">Ola mundo</button>
      <button className="big negative">Ola mundo</button>
      <button className="big  disable">Ola mundo</button>
      <button className="big  brand1">Ola mundo</button>
      <button className="big  BrandOpacity">Ola mundo</button>
      <button className="big  Light">Ola mundo</button>
      <button className="big  outlineLight">Ola mundo</button>
      <button className="big  Outline1">Ola mundo</button>
      <button className="big  big45">Ola mundo</button>
      <button className="big  Outline2">Ola mundo</button>
      <button className="big  outlineBrand1">Ola mundo</button>
      <button className="big  link">Ola mundo</button>
      <button className="big  alert">Ola mundo</button>
      <button className="big  sucess">Ola mundo</button>
      <button className="big  brandDisable">Ola mundo</button> */}
    </>
  );
}

export default App;
