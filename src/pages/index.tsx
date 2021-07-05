import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { BannerHome } from "../components/BannerHome";
import { Header } from "../components/Header";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Header />
      <Box as="main" pt="5rem">
        <BannerHome />
        <h1>Home</h1>
      </Box>
    </>
  );
}
