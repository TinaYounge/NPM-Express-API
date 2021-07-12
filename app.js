const express = require("express");
const app = express();
const port = 5000;
const logger = require("morgan");
app.use(express.json());

const programer = require("./data.json");
let programerJob = programer.jobs;
let companyName = programer.companies;
app.use(logger("dev"));

// app.get("/", (req, res) => {
//   res.send(programer);
//   console.log("foos");
// });
// GET request to http://localhost:5000/jobs and receive back an array of 20 jobs.
app.get("/jobs", (req, res) => {
  const newThing = { jobs: [] };
  for (let index = 0; index < 20; index++) {
    newThing.jobs.push(programerJob[index]);
  }
  // console.log("foo2");

  res.send(newThing);
});

//  GET request to http://localhost:5000/jobs?page=2 and receive an array, the 2nd array of 20 jobs(nums 20-40).
app.get("/jobs?page=2", (req, res) => {
  const newThing = { jobs: [] };
  for (let index = 20; index < 40; index++) {
    newThing.jobs.push(programerJob[index]);
  }
  res.send(newThing);
});

//  GET request to http://localhost:5000/jobs?page=2 and receive an array, the 2nd array of 20 jobs(nums 20-40).
app.get("/jobs?page=3", (req, res) => {
  const newThing = { jobs: [] };
  for (let index = 40; index < 60; index++) {
    newThing.jobs.push(programerJob[index]);
  }
  res.send(newThing);
});

// GET request to http://localhost:5000/jobs?companyName=Facebook and receive back a list of jobs where the company name is Facebook.
app.get("/jobs?companyName=Facebook", (req, res) => {
  // const findCompany = (element) => element.name === "Facebook";
  // const index = companyName.findIndex(findCompany);
  const index = companyName.findIndex((item) => item.name === "Facebook");
  const companyIdF = companyName[index].id;
  const result = programerJob.filter(
    (Element) => Element.companyId === companyIdF
  );
  console.log("foo6");
  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
