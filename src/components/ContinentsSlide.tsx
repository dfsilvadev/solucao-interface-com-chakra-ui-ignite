import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Link, { LinkProps } from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper/core";
import React from "react";

SwiperCore.use([Pagination, Navigation]);

type Continents = {
  id: number;
  name: string;
  description: string;
  bg_url: string;
};

interface ConstinentsSlideProps {
  continents: Continents[];
}

export function ConstinentsSlide({ continents }: ConstinentsSlideProps) {
  return (
    <>
      {continents && (
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="swiper-container"
        >
          {continents.map((item) => (
            <SwiperSlide key={item.name}>
              <Box
                w="100%"
                h="100%"
                background={`url(${item.bg_url}) center center no-repeat`}
                backgroundSize="cover"
              >
                <Flex
                  w="100%"
                  h="100%"
                  background="rgba(0,0,0,0.4)"
                  align="center"
                  justify="center"
                >
                  <Stack spacing="2">
                    <Link href={item.name.toLocaleLowerCase()} passHref>
                      <Text
                        fontSize={["24", "36", "48"]}
                        fontWeight="700"
                        color="#fff"
                        cursor="pointer"
                      >
                        {item.name}
                      </Text>
                    </Link>
                    <Text
                      fontSize={["14", "18", "24"]}
                      fontWeight="700"
                      color="#DADADA"
                    >
                      {item.description}
                    </Text>
                  </Stack>
                </Flex>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
