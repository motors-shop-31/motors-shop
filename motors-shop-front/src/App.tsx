import React from "react";
import { GlobalStyle } from "./styles";
import { FontsStyle } from "./styles/fonts";

import { ButtonStyle } from "./styles/button";
import { MainRoute } from "./routes/Route";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <GlobalStyle />
      <FontsStyle />
      <ButtonStyle />

      <MainRoute />
    </>
  );
}

export default App;
