import { Box, Stack } from "@chakra-ui/react";
import Head from "next/head";
import { BannerHome } from "../components/BannerHome";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Header />
      <Box as="main" pt="5rem">
        <Stack spacing="6">
          <BannerHome />
          <TravelTypes />
        </Stack>
      </Box>
    </>
  );
}
