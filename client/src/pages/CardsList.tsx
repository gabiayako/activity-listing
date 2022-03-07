import { useMemo } from "react";
import { Heading, Text, Stack, HStack, Button, Badge } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useActivities, useReports } from "../hooks";

import { PageWrapper } from "../components";

function CardsList() {
  const navigator = useNavigate();
  const { data: cards } = useActivities();

  const { data } = useReports();

  return (
    <PageWrapper>
      <Heading mb={4}>Atividades</Heading>
      {(cards || [])?.map(({ id, subject, chapter, studentGroup }) => {
        const reportData = data.find((report) => report.activityId === id);
        const sumData = reportData.studentData.reduce(
          (mean: number, { grade }) => {
            mean = mean + grade;
            return mean;
          },
          0
        );
        const meanGrade = sumData / reportData.studentData.length;

        return (
          <Button
            key={id}
            onClick={() => {
              navigator("/report", {
                replace: false,
                state: { activityId: id },
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
                    10
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
                  <Badge
                    ml="1"
                    fontSize="0.8em"
                    variant="subtle"
                    colorScheme="purple"
                  >
                    {meanGrade.toFixed(1)}
                  </Badge>
                </HStack>

                <HStack>
                  <Text fontSize="md" fontWeight="bold">
                    Participação
                  </Text>
                  <Badge ml="1" colorScheme="purple" variant="solid">
                    90%
                  </Badge>
                </HStack>
              </Stack>
            </HStack>
          </Button>
        );
      })}
    </PageWrapper>
  );
}

export default CardsList;
