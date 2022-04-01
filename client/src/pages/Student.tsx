import { Avatar, Heading, Stack } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { PageWrapper } from "../components";
import { useStudent } from "../hooks";

type LocationState = {
  studentId: string;
};

function Student() {
  const { state } = useLocation();
  const { studentId } = state as LocationState;

  const { data: student } = useStudent(studentId);

  return (
    <PageWrapper>
      <Stack
        spacing="1rem"
        h="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Avatar size="2xl" name={student.name} src={student.picture} />
        <Heading>{student.name}</Heading>
      </Stack>
    </PageWrapper>
  );
}

export { Student };
