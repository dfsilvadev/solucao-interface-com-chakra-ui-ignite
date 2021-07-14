import Head from "next/head";
import { useRouter } from "next/router";

import useTravelDestination from "../hooks/useTravelDestination";

import { Header } from "../components/Header";
import { Box, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Country } from "../components/Country";

type Country = {
  id: number;
  name: string;
  capital: string;
  capa?: string;
  flag?: string;
};

type CountryByContinent = {
  id: number;
  name: string;
  description: string;
  bg_url: string;
  countries: Country[];
};

export default function Continent() {
  const { asPath } = useRouter();
  const { countries } = useTravelDestination();

  const path = asPath.substr(1);
  const filterCountries = countries.filter(
    (item) => item.name.toLocaleLowerCase() === path
  );

  console.log(filterCountries);

  return (
    <>
      <Head>
        <title>Countries</title>
      </Head>
      <Header />
      <Box as="main" pt="5rem">
        {!!filterCountries &&
          filterCountries.map((item) => (
            <Box key={item.id}>
              <Box
                h="500px"
                background={`url(${item.bg_url})} center center`}
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                color="#fff"
              >
                <Flex
                  maxWidth={1160}
                  h="100%"
                  marginX="auto"
                  paddingY="6"
                  align="flex-end"
                >
                  <Text fontSize="48" fontWeight="600" color="#fff">
                    {path.toUpperCase()}
                  </Text>
                </Flex>
              </Box>
              <Stack
                spacing="6"
                maxWidth={1160}
                h="100%"
                marginX="auto"
                paddingY="6"
              >
                <SimpleGrid
                  columns={[1, null, 2]}
                  spacing="1rem"
                  w="100%"
                  paddingY="8"
                >
                  <Text textAlign="justify">{item.description}</Text>
                  <Flex align="center" justify="space-evenly">
                    <Box>
                      <Text
                        fontWeight="600"
                        fontSize="48"
                        lineHeight="48px"
                        align="center"
                        color="#FFBA08"
                      >
                        50
                      </Text>
                      <Text fontWeight="600" fontSize="24" align="center">
                        países
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        fontWeight="600"
                        fontSize="48"
                        lineHeight="48px"
                        align="center"
                        color="#FFBA08"
                      >
                        60
                      </Text>
                      <Text fontWeight="600" fontSize="24" align="center">
                        línguas
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        fontWeight="600"
                        fontSize="48"
                        lineHeight="48px"
                        align="center"
                        color="#FFBA08"
                      >
                        27
                      </Text>
                      <Text fontWeight="600" fontSize="24" align="center">
                        cidades +100
                      </Text>
                    </Box>
                  </Flex>
                </SimpleGrid>
                <Box fontSize="36" fontWeight="500">
                  <Text pb="6">Cidades +100</Text>
                  <SimpleGrid columns={[1, 2, 4]} spacing="1rem">
                    {item.countries.map((country) => (
                      <Country key={country.id} item={country} />
                    ))}
                  </SimpleGrid>
                </Box>
              </Stack>
            </Box>
          ))}
      </Box>
    </>
  );
}
