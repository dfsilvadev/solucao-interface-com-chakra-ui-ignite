import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { createServer } from "miragejs";

import { theme } from "../styles/theme";
import "../styles/global.scss";

createServer({
  routes() {
    this.namespace = "api";
    this.get("/continents", () => {
      return [
        {
          id: 1,
          name: "Europa",
          description: "O continente mais antigo.",
          bg_url: "./continents/europe.png",
        },
        {
          id: 1,
          name: "Asia",
          description: "Lorem Ipsum",
          bg_url: "./continents/asia.png",
        },
        {
          id: 1,
          name: "América do sul",
          description: "Lorem Ipsum",
          bg_url: "./continents/south_america.png",
        },
        {
          id: 1,
          name: "América do norte",
          description: "Lorem Ipsum",
          bg_url: "./continents/north_america.png",
        },
        {
          id: 1,
          name: "Africa",
          description: "Lorem Ipsum",
          bg_url: "./continents/africa.png",
        },
        {
          id: 1,
          name: "oceania",
          description: "Lorem Ipsum",
          bg_url: "./continents/oceania.png",
        },
      ];
    });
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
