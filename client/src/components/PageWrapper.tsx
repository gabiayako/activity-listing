import { Stack, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export const PageWrapper = ({ children }: { children: ReactNode }) => (
  <Flex bg="gray.200" h="100%" justifyContent="center">
    <Stack
      spacing="1rem"
      p={8}
      w="100%"
      maxWidth="720px"
      bg="white"
      borderRadius="20px"
      m="2rem"
    >
      {children}
    </Stack>
  </Flex>
);
