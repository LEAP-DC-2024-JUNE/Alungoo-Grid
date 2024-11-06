const http = require("http");
const url = require("url");
const fs = require("fs");

let briefItems = [];
let detailedItems = [];
let currentId = 1;

const initialize = () => {
  let briefContent = fs.readFileSync("./fruit-data/brief.json", "utf-8");
  briefItems = JSON.parse(briefContent);

  let detailedContent = fs.readFileSync("./fruit-data/detailed.json", "utf-8");
};
