const fs = require("node:fs");

fs.readFile("./texts/read-this.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error occured while reading file..", err);
  } else {
    console.log(data);

    fs.writeFile("./texts/output.txt", data, "utf8", (err) => {
      if (err) {
        console.log("Error occured while writing file..", err);
      } else {
        console.log(data);
        console.log("Successfully written");
      }
    });
    console.log("Started writing...");
  }
});
console.log("Started reading...");
