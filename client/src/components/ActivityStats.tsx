import { Badge, HStack, Stack, Text } from "@chakra-ui/react";
import { formatPercentage } from "../utils";

export const ActivityStats = ({
  meanGrade,
  participation,
}: {
  meanGrade: number;
  participation: number;
}) => (
  <Stack alignItems="flex-end" spacing="0.5rem">
    <HStack>
      <Text fontSize="md" fontWeight="bold">
        Média
      </Text>
      <Badge ml="1" fontSize="0.8em" variant="subtle" colorScheme="purple">
        {meanGrade.toFixed(1)}
      </Badge>
    </HStack>

    <HStack>
      <Text fontSize="md" fontWeight="bold">
        Participação
      </Text>
      <Badge ml="1" colorScheme="purple" variant="solid">
        {formatPercentage(participation)}
      </Badge>
    </HStack>
  </Stack>
);
