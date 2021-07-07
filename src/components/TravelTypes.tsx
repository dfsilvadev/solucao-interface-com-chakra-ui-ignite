import {
  Box,
  Flex,
  Grid,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

export function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Grid
        w="100%"
        maxWidth={1160}
        marginX="auto"
        paddingY="16"
        paddingX="6"
        templateColumns={["repeat(2, 1fr)", "repeat(5, 1fr)"]}
        gap={6}
      >
        <Flex
          align="center"
          justify="center"
          direction={["row", "column", "column"]}
        >
          <Image
            marginRight={["2", "0", "0"]}
            src={isWideVersion ? "cocktail.svg" : "ellipse.svg"}
            alt="Vida Noturna"
            title=" Taça de drink"
          />
          <Text fontSize={["18", "24", "24"]} fontWeight="600" color="#47585b">
            vida noturna
          </Text>
        </Flex>
        <Flex
          align="center"
          justify="center"
          direction={["row", "column", "column"]}
        >
          <Image
            marginRight={["2", "0", "0"]}
            src={isWideVersion ? "beach.svg" : "ellipse.svg"}
            alt="Praia"
            title="Imagem de uma prança de surf e sol"
          />
          <Text fontSize={["18", "24", "24"]} fontWeight="600" color="#47585b">
            praia
          </Text>
        </Flex>
        <Flex
          align="center"
          justify="center"
          direction={["row", "column", "column"]}
        >
          <Image
            marginRight={["2", "0", "0"]}
            src={isWideVersion ? "building.svg" : "ellipse.svg"}
            alt="Moderno"
            title="Imagem de um edifício"
          />
          <Text fontSize={["18", "24", "24"]} fontWeight="600" color="#47585b">
            moderno
          </Text>
        </Flex>
        <Flex
          align="center"
          justify="center"
          direction={["row", "column", "column"]}
        >
          <Image
            marginRight={["2", "0", "0"]}
            src={isWideVersion ? "museum.svg" : "ellipse.svg"}
            alt="Clássico"
            title="Imagem de uma construção grega"
          />
          <Text fontSize={["18", "24", "24"]} fontWeight="600" color="#47585b">
            clássico
          </Text>
        </Flex>
        <Flex
          align="center"
          justify="center"
          direction={["row", "column", "column"]}
        >
          <Image
            marginRight={["2", "0", "0"]}
            src={isWideVersion ? "earth.svg" : "ellipse.svg"}
            alt="E mais..."
            title="Imagem do globo terreste"
          />
          <Text fontSize={["18", "24", "24"]} fontWeight="600" color="#47585b">
            e mais...
          </Text>
        </Flex>
      </Grid>
    </Box>
  );
}
