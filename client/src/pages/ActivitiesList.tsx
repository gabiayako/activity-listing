import { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";

import { PageWrapper, ActivityCard } from "../components";

interface Activity {
  id: string;
  subject: string;
  chapter: string;
  studentGroup: string;
}

function ActivitiesList() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const response = await fetch("http://localhost:9000/activities");
      const data = await response.json();
      setActivities(data);
    };

    fetchActivities();
  }, []);

  return (
    <PageWrapper>
      <Heading mb={4}>Atividades</Heading>
      {activities
        ? activities.map(({ id, subject, chapter, studentGroup }) => {
            return (
              <ActivityCard
                key={id}
                activityId={id}
                chapter={chapter}
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
