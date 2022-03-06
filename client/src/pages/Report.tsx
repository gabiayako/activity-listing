import {
  Badge,
  Heading,
  HStack,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useMemo } from "react";
import { useReports } from "../hooks";

import { PageWrapper } from "../components";

function Report() {
  const { data } = useReports();

  const meanGrade = useMemo(() => {
    if (data) {
      const sumData = data.reduce((mean: number, { grade }) => {
        mean = mean + grade;
        return mean;
      }, 0);
      const mean = sumData / data.length;
      return mean;
    }
  }, [data]);

  return (
    <PageWrapper>
      <HStack justify="space-between">
        <Heading mb={4}>Report</Heading>
        <ActivityStats meanGrade={meanGrade} participation={data?.length} />
      </HStack>
      <StudentsList studentGrades={data} />
    </PageWrapper>
  );
}

const StudentsList = ({
  studentGrades,
}: {
  studentGrades: { name: string; grade: number }[];
}) => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>Nome</Th>
        <Th isNumeric>Nota</Th>
      </Tr>
    </Thead>

    <Tbody>
      {(studentGrades || [])?.map(({ name, grade }) => (
        <Tr key={name}>
          <Td>{name}</Td>
          <Td isNumeric>{grade}</Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

const ActivityStats = ({
  meanGrade,
  participation,
}: {
  meanGrade: number;
  participation: number;
}) => (
  <Stack alignItems="flex-end" spacing="0.5rem">
    {/* <HStack>
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
  </HStack> */}

    <HStack>
      <Text fontSize="md" fontWeight="bold">
        Média
      </Text>
      <Badge ml="1" fontSize="0.8em" variant="subtle" colorScheme="purple">
        {meanGrade}
      </Badge>
    </HStack>

    <HStack>
      <Text fontSize="md" fontWeight="bold">
        Participação
      </Text>
      <Badge ml="1" colorScheme="purple" variant="solid">
        {participation}
      </Badge>
    </HStack>
  </Stack>
);

export default Report;
