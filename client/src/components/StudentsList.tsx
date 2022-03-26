import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

export const StudentsList = ({
  studentData,
}: {
  studentData: { name: string; grade: number }[];
}) =>
  studentData ? (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th isNumeric>Nota</Th>
        </Tr>
      </Thead>

      <Tbody>
        {studentData?.map(({ name, grade }) => (
          <Tr key={name}>
            <Td>{name}</Td>
            <Td isNumeric>{grade}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ) : null;
