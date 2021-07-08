import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { ContinentsAndCountriesProvider } from "../contexts/ContinentsAndCountriesContext";
import { makeServer } from "../services/mirage";

import { theme } from "../styles/theme";
import "../styles/global.scss";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ContinentsAndCountriesProvider>
        <Component {...pageProps} />
      </ContinentsAndCountriesProvider>
    </ChakraProvider>
  );
}

export default MyApp;
