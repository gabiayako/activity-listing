// src/mocks/handlers.js
import { rest } from "msw";
import * as faker from "@faker-js/faker";

export const handlers = [
  rest.get("/user", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        subject: "Matemática",
        chapter: "Equações",
        studentGroup: "M1",
        color: "pink.500",
      })
    );
  }),

  rest.get("/report", (req, res, ctx) => {
    // faker.faker.seed(122);
    // const reportData = [...Array(20)].reduce((reportData, _) => {
    //   const name = `${faker.faker.name.firstName()} ${faker.faker.name.lastName()}`;
    //   const grade = faker.faker.datatype.number({ min: 0, max: 9 });
    //   reportData.push({ name, grade });
    //   return reportData;
    // }, []);
    const reportData = [
      { name: "Adele", grade: 0 },
      { name: "Beyonce", grade: 2 },
      { name: "Celine Dion", grade: 7 },
      { name: "Demi Lovato", grade: 3 },
    ];
    return res(ctx.status(200), ctx.json(reportData));
  }),
];
