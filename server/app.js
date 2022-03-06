//app.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "*" }));

app.get("/report", function (req, res) {
  setTimeout(() => {
    res.send([
      { name: "Adele", grade: 0 },
      { name: "Beyonce", grade: 3 },
      { name: "Celine Dion", grade: 7 },
      { name: "Demi Lovato", grade: 2 },
    ]);
  }, 1000);
});

app.get("/activities", function (req, res) {
  setTimeout(() => {
    res.send([
      {
        subject: "Matemática",
        chapter: "Equações de segundo grau",
        studentGroup: "M1",
      },
      {
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
