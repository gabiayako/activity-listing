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
          { id: "adele", name: "Adele", grade: null },
          { id: "beyonce", name: "Beyonce", grade: null },
          { id: "camila-cabello", name: "Camila Cabello", grade: 2 },
          { id: "demi-lovato", name: "Demi Lovato", grade: 2 },
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

app.get("/adele", function (req, res) {
  res.send({
    name: "Adele Laurie Blue Adkins",
    picture:
      "https://d3g9pb5nvr3u7.cloudfront.net/authors/56279ec7d64ba8ba1c6aac1d/-226522167/256.jpg",
  });
});

app.get("/beyonce", function (req, res) {
  res.send({
    name: "Beyoncé Giselle Knowles-Carter",
    picture:
      "https://www.stylist.co.uk/images/app/uploads/2018/10/24115922/beyonce-hero-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress",
  });
});

app.get("/camila-cabello", function (req, res) {
  res.send({
    name: "Karla Camila Cabello Estrabao",
    picture:
      "https://b.thumbs.redditmedia.com/E1wGsvn1kpftg3JvVn7JvEm7dpw9Rvt4JvBcMw6KCIE.png",
  });
});

app.get("/demi-lovato", function (req, res) {
  res.send({
    name: "Demetria Devonne Lovato",
    picture:
      "https://d3g9pb5nvr3u7.cloudfront.net/authors/59e799f2141b805cf2eb6f52/-262156791/256.jpg",
  });
});

app.listen(9000, function () {
  console.log("SERVER STARTED ON localhost:9000");
});
