export const getMeanGradeAndParticipation = (
  studentData: {
    name: string;
    grade: number;
  }[]
) => {
  const emptyResult = {
    meanGrade: 0,
    participation: 0,
  };

  if (!studentData) return emptyResult;

  let sumGrade = 0;
  let studentCount = 0;

  studentData.forEach(({ grade }) => {
    if (grade) {
      sumGrade = sumGrade + grade;
      studentCount = studentCount + 1;
    }
  });

  return studentCount > 0
    ? {
        meanGrade: sumGrade / studentCount,
        participation: studentCount / studentData.length,
      }
    : emptyResult;
};
