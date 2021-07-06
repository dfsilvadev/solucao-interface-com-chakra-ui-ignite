import { Box, Flex, Stack, Text } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper/core";
import React from "react";

SwiperCore.use([Pagination, Navigation]);

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
          <Text fontSize="36" fontWeight="500">
            Vamos nessa?
          </Text>
          <Text fontSize="36" fontWeight="500">
            Então escolha seu continente
          </Text>
        </Stack>
        <Box w="100%" minH="450px" paddingY="6">
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
            <SwiperSlide>
              <Box
                w="100%"
                h="100%"
                background="url('./continents/europe.png') center center no-repeat"
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
                    <Text fontSize="48" fontWeight="700" color="#fff">
                      Europa
                    </Text>
                    <Text fontSize="24" fontWeight="700" color="#DADADA">
                      O continente mais antigo.
                    </Text>
                  </Stack>
                </Flex>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                w="100%"
                h="100%"
                background="url('./continents/asia.png') center center no-repeat"
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
                    <Text fontSize="48" fontWeight="700" color="#fff">
                      Asia
                    </Text>
                    <Text fontSize="24" fontWeight="700" color="#DADADA">
                      Lorem ipsum dolor sit amet.
                    </Text>
                  </Stack>
                </Flex>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                w="100%"
                h="100%"
                background="url('./continents/africa.png') center center no-repeat"
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
                    <Text fontSize="48" fontWeight="700" color="#fff">
                      Africa
                    </Text>
                    <Text fontSize="24" fontWeight="700" color="#DADADA">
                      Lorem ipsum dolor sit amet.
                    </Text>
                  </Stack>
                </Flex>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                w="100%"
                h="100%"
                background="url('./continents/oceania.png') center center no-repeat"
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
                    <Text fontSize="48" fontWeight="700" color="#fff">
                      Oceania
                    </Text>
                    <Text fontSize="24" fontWeight="700" color="#DADADA">
                      Lorem ipsum dolor sit amet.
                    </Text>
                  </Stack>
                </Flex>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                w="100%"
                h="100%"
                background="url('./continents/south_america.png') center center no-repeat"
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
                    <Text fontSize="48" fontWeight="700" color="#fff">
                      América do sul
                    </Text>
                    <Text fontSize="24" fontWeight="700" color="#DADADA">
                      Lorem ipsum dolor sit amet.
                    </Text>
                  </Stack>
                </Flex>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                w="100%"
                h="100%"
                background="url('./continents/north_america.png') center center no-repeat"
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
                    <Text fontSize="48" fontWeight="700" color="#fff">
                      América do norte
                    </Text>
                    <Text fontSize="24" fontWeight="700" color="#DADADA">
                      Lorem ipsum dolor sit amet.
                    </Text>
                  </Stack>
                </Flex>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Flex>
    </Box>
  );
}
