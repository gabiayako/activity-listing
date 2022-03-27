import { Heading, HStack } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

import { useReports } from "../hooks";

import { ActivityStats, PageWrapper, StudentsList } from "../components";
import { getMeanGradeAndParticipation } from "../utils";

type LocationState = {
  activityId: string;
};

function Report() {
  const { state } = useLocation();
  const { activityId } = state as LocationState;

  const { data: reports } = useReports();

  const report = (reports || []).find(
    (report) => report.activityId === activityId
  );
  const { meanGrade, participation } = getMeanGradeAndParticipation(
    report?.studentData
  );

  return (
    <PageWrapper>
      <HStack justify="space-between">
        <Heading mb={4}>Report</Heading>
        <ActivityStats meanGrade={meanGrade} participation={participation} />
      </HStack>
      <StudentsList studentData={report?.studentData} />
    </PageWrapper>
  );
}

export { Report };
