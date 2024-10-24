const fs = require("node:fs");

let reverseString = () => {
  let reverse = "";
  let str = fs.readFileSync("./texts/input.txt", "utf-8");
  for (let i = 0; i < str.length; i++) {
    reverse = str[i] + reverse;
  }
  fs.writeFileSync("./texts/output-file.txt", reverse);
};
reverseString();
