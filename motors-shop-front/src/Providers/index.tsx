import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "../contexts/modalContext";

interface ProvidersProps { 
  children: React.ReactNode;
}


const Providers = ({children}: ProvidersProps) => {
  return (
    <>
        <ChakraProvider resetCSS={false}>
              <AuthProvider>{children}</AuthProvider>
        </ChakraProvider>
     
    </>
  );
};

export default Providers;


