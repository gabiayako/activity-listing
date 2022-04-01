import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { fetchStudent } from "../hooks";

export const StudentsList = ({
  studentData,
}: {
  studentData: { id: string; name: string; grade: number }[];
}) => {
  const navigator = useNavigate();
  const queryClient = useQueryClient();

  return studentData ? (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th isNumeric>Nota</Th>
        </Tr>
      </Thead>

      <Tbody>
        {studentData?.map(({ id: studentId, name, grade }) => {
          // const preFetchStudent = async () => {
          //   await queryClient.prefetchQuery(
          //     ["student", studentId],
          //     () => fetchStudent(studentId),
          //     {
          //       staleTime: 60 * 1000, // only prefetch if older than 10 seconds
          //     }
          //   );
          // };
          // preFetchStudent();

          return (
            <Tr key={name}>
              <Td>
                <Button
                  w="100%"
                  variant="link"
                  justifyContent="flex-start"
                  // onMouseOver={async () => {
                  //   await queryClient.prefetchQuery(
                  //     ["student", studentId],
                  //     () => fetchStudent(studentId),
                  //     {
                  //       staleTime: 60 * 1000, // only prefetch if older than 60 seconds
                  //     }
                  //   );
                  // }}
                  onClick={() => {
                    navigator("/student", {
                      replace: false,
                      state: { studentId },
                    });
                  }}
                >
                  {name}
                </Button>
              </Td>
              <Td isNumeric>{grade}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  ) : null;
};
