const http = require("http");
const fs = require("fs");

const data = fs.readFileSync("./dev-data/data.json", "utf8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  let path = req.url;
  let method = req.method;

  if (path === "" || path === "/" || path === "/home") {
    res.end("Hello , its from HOME page");
  } else if (path === "/products") {
    res.end("Hey yoo! it is from PRODUCTS page!");
  } else if (path === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  } else if (path.startsWith("/api/goods/") && method === "GET") {
    const paths = path.split("/");
    const id = parseInt(paths[3]);
    const data = dataObj.find((item) => item.id === id);

    if (data) {
      res.writeHead(200, { "Content-Type": "application/json" });
      console.log(data);
      res.end(JSON.stringify(data));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "item is not found" }));
    }
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>page not found<h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log(" Listening to request on port 8000....");
});
