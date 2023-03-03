import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./contexts/GlobalContext";
import Providers from "./Providers";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextProvider>
      <ChakraProvider resetCSS={false}>
        <BrowserRouter>
          <Providers>
            <App />
          </Providers>
        </BrowserRouter>
      </ChakraProvider>
    </ContextProvider>
  </React.StrictMode>
);
