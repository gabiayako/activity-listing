//app.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "*" }));

app.get("/reports", function (req, res) {
  setTimeout(() => {
    res.send([
      {
        activityId: "math-m1",
        studentData: [
          { name: "Adele", grade: 10 },
          { name: "Beyonce", grade: 10 },
          { name: "Camila Cabello", grade: 5 },
          { name: "Demi Lovato", grade: 2 },
        ],
      },
      {
        activityId: "math-m2",
        studentData: [
          { name: "Ed Sheeran", grade: null },
          { name: "Felipe Dylon", grade: 10 },
          { name: "Gessica Kayane", grade: 7 },
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
