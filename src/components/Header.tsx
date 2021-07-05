import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import { RiArrowLeftSLine } from "react-icons/ri";

export function Header() {
  return (
    <Box bg="#fff" position="fixed" w="100%" top="0">
      <Flex w="100%" maxWidth={1160} marginX="auto" h="5rem" align="center">
        <Icon as={RiArrowLeftSLine} fontSize="28" />
        <Flex flex="1" align="center" justify="center">
          <Image
            src="logo.svg"
            alt="Logo worldtrip"
            title="Worldtrip"
            maxWidth="184px"
          />
        </Flex>
      </Flex>
    </Box>
  );
}
