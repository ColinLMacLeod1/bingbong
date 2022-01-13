const express = require("express");
const fs = require("fs");
const cors = require("cors")
const app = express();
const port = 3005;

app.use(cors());

const functionFolder = "../../api/";
const fileTypes = /^\w+\.js$/g;
const functionsList = fs
  .readdirSync(functionFolder)
  .filter((item) => item.match(fileTypes));

functionsList.forEach((endpoint) => {
  const name = endpoint.split(".")[0];
  const lambda = require(`../../api/${name}`);
  app.get(`/api/${name}`, (req, res) => {
    lambda(req, res);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
