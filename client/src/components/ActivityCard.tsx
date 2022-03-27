import { Badge, Button, HStack, Skeleton, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { formatPercentage } from "../utils";

interface ActivityCardProps {
  activityId: string;
  chapter: string;
  isReportLoading: boolean;
  meanGrade: number;
  participation: number;
  studentGroup: string;
  subject: string;
}

export const ActivityCard = ({
  activityId,
  chapter,
  isReportLoading,
  meanGrade,
  participation,
  studentGroup,
  subject,
}: ActivityCardProps) => {
  const navigator = useNavigate();

  return (
    <Button
      key={activityId}
      onClick={() => {
        navigator("/report", {
          replace: false,
          state: { activityId },
        });
      }}
      bg="#FAFAFF"
      p={8}
      h={32}
      borderRadius="10px"
      boxShadow="md"
    >
      <HStack w="100%" justifyContent="space-between">
        <HStack spacing="3rem">
          <Stack>
            <Text color="#9592A6" fontSize="2rem" fontWeight="700">
              04
            </Text>
            <Text color="#9592A6" fontSize="sm" fontWeight="400">
              ABRIL
            </Text>
          </Stack>
          <Stack alignItems="flex-start">
            <Text color="#021442" fontSize="lg">
              {subject}
            </Text>
            <Text color="#9592A6" fontSize="md">
              {chapter}
            </Text>
          </Stack>
        </HStack>

        <Stack alignItems="flex-end" spacing="0.5rem">
          <HStack>
            <Text fontSize="md" fontWeight="bold">
              Turma
            </Text>
            <Badge
              ml="1"
              fontSize="0.8em"
              variant="outline"
              colorScheme="purple"
            >
              {studentGroup}
            </Badge>
          </HStack>

          <HStack>
            <Text fontSize="md" fontWeight="bold">
              Média
            </Text>
            <Skeleton isLoaded={!isReportLoading}>
              <Badge
                ml="1"
                fontSize="0.8em"
                variant="subtle"
                colorScheme="purple"
              >
                {meanGrade.toFixed(1)}
              </Badge>
            </Skeleton>
          </HStack>

          <HStack>
            <Text fontSize="md" fontWeight="bold">
              Participação
            </Text>
            <Skeleton isLoaded={!isReportLoading}>
              <Badge ml="1" colorScheme="purple" variant="solid">
                {formatPercentage(participation)}
              </Badge>
            </Skeleton>
          </HStack>
        </Stack>
      </HStack>
    </Button>
  );
};
