import { Heading } from "@chakra-ui/react";
import { useActivities, useReports } from "../hooks";

import { PageWrapper, ActivityCard } from "../components";
import { getMeanGradeAndParticipation } from "../utils";

function ActivitiesList() {
  const { data: activities } = useActivities();
  const { data: reports, isLoading: isReportLoading } = useReports();

  return (
    <PageWrapper>
      <Heading mb={4}>Atividades</Heading>
      {activities
        ? activities.map(({ id, subject, chapter, studentGroup }) => {
            const report = (reports || []).find(
              (report) => report.activityId === id
            );

            const { meanGrade, participation } = getMeanGradeAndParticipation(
              report.studentData
            );

            return (
              <ActivityCard
                activityId={id}
                chapter={chapter}
                isReportLoading={isReportLoading}
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
