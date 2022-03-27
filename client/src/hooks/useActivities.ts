import { useQuery, useQueryClient } from "react-query";

const fetchActivities = async () => {
  const response = await fetch("http://localhost:9000/activities");
  const data = await response.json();
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
