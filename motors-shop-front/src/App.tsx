import React from "react";
import { GlobalStyle } from "./styles";
import { FontsStyle } from "./styles/fonts";
import { ButtonStyle } from "./styles/button";
import { MainRoute } from "./routes/Route";
import ModalForm from "./components/ModalCreate";

function App() {
  return (
    <>
      <GlobalStyle />
      <FontsStyle />
      <ButtonStyle />
      <MainRoute />
      {/* <ModalDelete/> */}
      {/* <ModalForm/> */}
    </>
  );
}

export default App;
