import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

type Report = {
  activityId: string;
  studentData: {
    name: string;
    grade: number;
  }[];
};

const fetchReport = async () => {
  const { data } = await axios.get("http://localhost:9000/report");
  return data;
};

export const useReports = () => {
  const queryClient = useQueryClient();
  return useQuery<Report[]>("reportData", fetchReport, {
    staleTime: 60 * 60 * 1000,
    initialData: () => {
      return queryClient.getQueryData("reportData");
    },
  });
};
