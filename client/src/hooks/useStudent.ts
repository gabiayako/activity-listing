import { useQuery, useQueryClient } from "react-query";

type Student = {
  name: string;
  picture: string;
};

export const fetchStudent = async (studentId: string) => {
  const response = await fetch(`http://localhost:9000/${studentId}`);
  const data = await response.json();
  return data;
};

export const useStudent = (studentId: string) => {
  const queryClient = useQueryClient();
  return useQuery<Student>(
    ["student", studentId],
    () => fetchStudent(studentId),
    {
      staleTime: 60 * 60 * 1000,
      refetchOnWindowFocus: "always",
      initialData: () => {
        return queryClient.getQueryData(["student", studentId]);
      },
    }
  );
};
