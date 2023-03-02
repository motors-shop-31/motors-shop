import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Providers from "./Providers";




const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider resetCSS={false}>
      <BrowserRouter>
        <Providers>
            <App />
        </Providers>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);