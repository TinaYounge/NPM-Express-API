const express = require("express");
const app = express();
const port = 5000;
const logger = require("morgan");
const programer = require("./data.json");
let programerJob = programer.jobs;
app.use(logger("dev"));

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
