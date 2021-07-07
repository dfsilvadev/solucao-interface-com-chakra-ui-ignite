import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { api } from "../services/api";

import { ConstinentsSlide } from "../components/ContinentsSlide";
import { useEffect, useState } from "react";

type Continents = {
  id: number;
  name: string;
  description: string;
  bg_url: string;
};

export function Continents() {
  const [continents, setContinents] = useState<Continents[]>([]);

  useEffect(() => {
    api.get("continents").then((response) => setContinents(response.data));
  }, []);

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
