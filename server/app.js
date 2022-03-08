//app.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "*" }));

app.get("/report", function (req, res) {
  setTimeout(() => {
    res.send([
      {
        activityId: "math-m1",
        studentData: [
          { name: "Adele", grade: 10 },
          { name: "Beyonce", grade: 3 },
          { name: "Camila Cabello", grade: 7 },
          { name: "Demi Lovato", grade: 2 },
        ],
      },
      {
        activityId: "math-m2",
        studentData: [
          { name: "Ed Sheeran", grade: 6 },
          { name: "Felipe Dylon", grade: 3 },
          { name: "Gloria Groove", grade: 7 },
        ],
      },
    ]);
  }, 1000);
});

app.get("/activities", function (req, res) {
  setTimeout(() => {
    res.send([
      {
        id: "math-m1",
        subject: "Matemática",
        chapter: "Equações de segundo grau",
        studentGroup: "M1",
      },
      {
        id: "math-m2",
        subject: "Matemática",
        chapter: "Equações de segundo grau",
        studentGroup: "M2",
      },
    ]);
  }, 100);
});

app.listen(9000, function () {
  console.log("SERVER STARTED ON localhost:9000");
});
