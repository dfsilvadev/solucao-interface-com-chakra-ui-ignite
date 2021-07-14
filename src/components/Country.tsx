import { Box, Flex, Image, Text } from "@chakra-ui/react";

type Country = {
  id: number;
  name: string;
  capital: string;
  capa?: string;
  flag?: string;
};

interface CountryProps {
  item: Country;
}

export function Country({ item }: CountryProps) {
  return (
    <Flex
      direction="column"
      w="100%"
      h="279px"
      borderRadius="4px"
      border="1px solid rgba(255, 186, 8, 0.5)"
      bg="#fff"
    >
      <Box
        w="100%"
        h="173"
        background={`#c4c4c4 url(${item.capa}) center center no-repeat`}
        backgroundSize="cover"
      ></Box>
      <Flex>
        <Box paddingY="6" paddingX="6" w="70%">
          <Text fontSize="20" fontWeight="600">
            {item.capital}
          </Text>
          <Text fontSize="16" fontWeight="500" color="#999">
            {item.name}
          </Text>
        </Box>
        <Flex align="center" justify="center">
          <Box>
            <Image src={item.flag} alt={item.name} title={item.name} />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
