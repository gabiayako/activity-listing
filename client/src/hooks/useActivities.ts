import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchActivities = async () => {
  const { data } = await axios.get("http://localhost:9000/activities");
  return data;
};

export const useActivities = () => {
  const queryClient = useQueryClient();
  return useQuery("activities", fetchActivities, {
    staleTime: 60 * 60 * 1000,
    refetchOnWindowFocus: "always",
    initialData: () => {
      return queryClient.getQueryData("activities");
    },
  });
};
