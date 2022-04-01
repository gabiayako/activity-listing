import { useQuery, useQueryClient } from "react-query";

type Report = {
  activityId: string;
  studentData: {
    id: string;
    name: string;
    grade: number;
  }[];
};

const fetchReport = async () => {
  const response = await fetch("http://localhost:9000/report");
  const data = await response.json();
  return data;
};

export const useReports = () => {
  const queryClient = useQueryClient();
  return useQuery<Report[]>("reportData", fetchReport, {
    staleTime: 60 * 60 * 1000,
    refetchOnWindowFocus: "always",
    initialData: () => {
      return queryClient.getQueryData("reportData");
    },
  });
};
