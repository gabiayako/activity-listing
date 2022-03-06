import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchReport = async () => {
  const { data } = await axios.get("http://localhost:9000/report");
  return data;
};

export const useReports = () => {
  const queryClient = useQueryClient();
  return useQuery("reportData", fetchReport, {
    staleTime: 60 * 60 * 1000,
    initialData: () => {
      return queryClient.getQueryData("reportData");
    },
  });
};
