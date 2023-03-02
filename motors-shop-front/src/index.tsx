import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./contexts/GlobalContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextProvider>
      <ChakraProvider resetCSS={false}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </ContextProvider>
  </React.StrictMode>
);
