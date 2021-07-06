import { Box, Flex, Stack } from "@chakra-ui/react";
import Head from "next/head";

import { BannerHome } from "../components/BannerHome";
import { Continents } from "../components/Continents";
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
          <Flex align="center" justify="center">
            <Box w="90px" h="2px" bg="#47585B" />
          </Flex>
          <Continents />
        </Stack>
      </Box>
    </>
  );
}
