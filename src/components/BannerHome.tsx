import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

export function BannerHome() {
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
      >
        <Stack spacing="4">
          <Text as="h1" fontWeight="600" fontSize="36" maxW={426}>
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text as="p" fontWeight="400" fontSize="20" maxW={524}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Stack>
        <Image
          src="airplane.svg"
          alt="Avião"
          title="Avião levantando voou"
          mt="100px"
        />
      </Flex>
    </Box>
  );
}
