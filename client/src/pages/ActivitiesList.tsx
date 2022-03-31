import { useQuery } from "react-query";
import { Heading } from "@chakra-ui/react";

import { PageWrapper, ActivityCard } from "../components";

import { getMeanGradeAndParticipation } from "../utils";

interface Activity {
  id: string;
  subject: string;
  chapter: string;
  studentGroup: string;
}

const fetchActivities = async () => {
  const response = await fetch("http://localhost:9000/activities");
  const data = await response.json();
  return data;
};

interface Report {
  activityId: string;
  studentData: { name: string; grade: number | null }[];
}

const fetchReport = async () => {
  const response = await fetch("http://localhost:9000/reports");
  const data = await response.json();
  return data;
};

function ActivitiesList() {
  const { data: activities } = useQuery<Activity[]>(
    "activities",
    fetchActivities,
    {
      staleTime: 1000 * 60,
    }
  );

  const { data: reports } = useQuery<Report[]>("reportData", fetchReport, {
    staleTime: 1000 * 60,
  });

  return (
    <PageWrapper>
      <Heading mb={4}>Atividades</Heading>
      {activities
        ? activities.map(({ id, subject, chapter, studentGroup }) => {
            const report = (reports || []).find(
              (report) => report.activityId === id
            );

            const { meanGrade, participation } = getMeanGradeAndParticipation(
              report?.studentData
            );

            return (
              <ActivityCard
                key={id}
                activityId={id}
                chapter={chapter}
                meanGrade={meanGrade}
                participation={participation}
                studentGroup={studentGroup}
                subject={subject}
              />
            );
          })
        : null}
    </PageWrapper>
  );
}

export { ActivitiesList };
