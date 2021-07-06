import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";

export function TravelTypes() {
  return (
    <Box>
      <Grid
        w="100%"
        maxWidth={1160}
        marginX="auto"
        paddingY="16"
        templateColumns="repeat(5, 1fr)"
        gap={6}
      >
        <Grid align="center" gap="1.5">
          <Image src="cocktail.svg" />
          <Text fontSize="24" fontWeight="600" color="#47585b">
            vida noturna
          </Text>
        </Grid>
        <Grid align="center" gap="1.5">
          <Image src="beach.svg" />
          <Text fontSize="24" fontWeight="600" color="#47585b">
            praia
          </Text>
        </Grid>
        <Grid align="center" gap="1.5">
          <Image src="building.svg" />
          <Text fontSize="24" fontWeight="600" color="#47585b">
            moderno
          </Text>
        </Grid>
        <Grid align="center" gap="1.5">
          <Image src="museum.svg" />
          <Text fontSize="24" fontWeight="600" color="#47585b">
            clássico
          </Text>
        </Grid>
        <Grid align="center" gap="1.5">
          <Image src="earth.svg" />
          <Text fontSize="24" fontWeight="600" color="#47585b">
            e mais...
          </Text>
        </Grid>
      </Grid>
    </Box>
  );
}
