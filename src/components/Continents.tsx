import { Box, Flex, Stack, Text } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper/core";
import React from "react";
import { ConstinentsSlide } from "./ContinentsSlide";

SwiperCore.use([Pagination, Navigation]);

const continents = [
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

export function Continents() {
  return (
    <Box>
      <Flex
        w="100%"
        maxWidth={1160}
        marginX="auto"
        direction="column"
        paddingY="6"
      >
        <Stack align="center">
          <Text fontSize={["20", "36"]} fontWeight="500">
            Vamos nessa?
          </Text>
          <Text fontSize={["20", "36"]} fontWeight="500">
            Então escolha seu continente
          </Text>
        </Stack>
        <Box w="100%" minH="450px" paddingY="6">
          <ConstinentsSlide continents={continents} />
        </Box>
      </Flex>
    </Box>
  );
}
