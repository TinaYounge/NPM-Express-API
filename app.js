const express = require("express");
const app = express();
const port = 5000;
const logger = require("morgan");
const programer = require("./data.json");
let programerJob = programer.jobs;
app.use(logger("dev"));

app.get("/", (req, res) => {
  const programerFirstTwen = [];
  for (let index = 0; index < 20; index++) {
    programerFirstTwen.push(programer[index]);
  }
  res.send(programerFirstTwen);
  console.log("programs");
});
// GET request to http://localhost:5000/jobs and receive back an array of 20 jobs.
app.get("/jobs", (req, res) => {
  const newThing = { jobs: [] };
  for (let index = 0; index < 20; index++) {
    newThing.jobs.push(programerJob[index]);
  }
  res.send(newThing);
  console.log("Foo");
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
  const newThing = { jobs: [] };
  for (let index = 40; index < 60; index++) {
    newThing.jobs.push(programerJob[index]);
  }
  res.send(newThing);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
