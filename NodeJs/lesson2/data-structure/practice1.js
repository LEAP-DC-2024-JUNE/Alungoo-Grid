const fs = require("node:fs");

let reverseString = (str) => {
  let reverse = "";
  for (let i = 0; i < str.length; i++) {
    reverse = str[i] + reverse;
  }
  return reverse;
};

let input = "abc";
let result = reverseString(input);
console.log(`Input: ${input}, output:${result}`);
input = "color";
result = reverseString(input);
console.log(`Input: ${input}, output:${result}`);
input = "Sansar";
result = reverseString(input);
console.log(`Input: ${input}, output:${result}`);

function max(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}
console.log(max(5, 10));
console.log(max(50, 10));
console.log(max(15, 10));

function libraryMax(a, b) {
  return Math.max(a, b);
  //build -in ojects
}
console.log(libraryMax(5, 10));
console.log(libraryMax(50, 10));
console.log(libraryMax(15, 10));

let reverseStringFromFile = () => {
  let str = fs.readFileSync("./texts/input.txt", "utf-8");
  let reverseFile = reverseString(str);
  fs.writeFileSync("./texts/output-file.txt", reverseFile);
};
reverseStringFromFile();
