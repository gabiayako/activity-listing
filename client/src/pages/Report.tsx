import {
  Box,
  Center,
  Divider,
  Grid,
  GridItem,
  Heading,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useMemo } from "react";
import { useReports } from "../hooks";

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
    <VStack h="100%" bg="gray.200">
      <Stack p={8} w="100%" maxWidth="720px">
        <Heading mb={4}>Report</Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th isNumeric>Nota</Th>
            </Tr>
          </Thead>

          <Tbody>
            {data?.map(({ name, grade }) => (
              <Tr>
                <Td>{name}</Td>
                <Td isNumeric>{grade}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Divider height="2px" my="5rem" borderColor="gray.700" />
        <Grid templateColumns="repeat(2, 1fr)" gap={3}>
          <GridItem w="100%">
            <Center bg="yellow.300" h="10rem" w="10rem">
              <VStack>
                <Text fontSize="lg" fontWeight="800">
                  Média
                </Text>
                <Text>{meanGrade}</Text>
              </VStack>
            </Center>
          </GridItem>
          <GridItem w="100%">
            <Center bg="yellow.300" h="10rem" w="10rem">
              <VStack>
                <Text fontSize="lg" fontWeight="800">
                  Participação
                </Text>
                <Text>{data?.length}</Text>
              </VStack>
            </Center>
          </GridItem>
        </Grid>
      </Stack>
    </VStack>
  );
}

export default Report;
