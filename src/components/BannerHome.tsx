import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export function BannerHome() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      background="url('background.png') center center/cover no-repeat"
      color="#fff"
    >
      <Flex
        w="100%"
        maxWidth={1160}
        maxHeight={333}
        marginX="auto"
        align="center"
        justify="space-between"
        paddingX="6"
        paddingY="6"
      >
        <Stack spacing="4">
          <Text
            as="h1"
            fontWeight="600"
            fontSize={["20", "33", "36"]}
            maxW={426}
          >
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text
            as="p"
            fontWeight="400"
            fontSize={["14", "18", "20"]}
            maxW={524}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Stack>
        {isWideVersion && (
          <Image
            src="airplane.svg"
            alt="Avião"
            title="Avião levantando voou"
            mt="100px"
          />
        )}
      </Flex>
    </Box>
  );
}
