const http = require("http");
const url = require("url");

let items = [];
let currentId = 1;

//body hesegiig ingej l awna
const parseBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => resolve(JSON.parse(body)));
    req.on("error", (err) => reject(err));
  });
};
const server = http.createServer((request, response) => {
  const reqUrl = url.parse(request.url, true);
  const method = request.method;
  const pathname = reqUrl.pathname;

  if (pathname === "/api/items" && method === "POST") {
    //create
    console.log("POST method is called");
    const data = parseBody(request);
    const newItem = { id: currentId++, ...data };
    items.push(newItem);

    response.writeHead(201, { "Content-Type": "application/json" });
    response.end(JSON.stringify(newItem));
  } else if (pathname === "/api/items" && method === "GET") {
    //read all
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(items));
  } else if (pathname === "/api/items" && method === "GET") {
    // read single item
    console.log("GET method for single  is called");
  } else if (pathname === "/api/items" && method === "PUT") {
    // update
    console.log("PUT method is called");
  } else if (pathname === "/api/items" && method === "DELETE") {
    //delete
    console.log("DELETE method is called");
  } else {
    //page not found
  }
  //   response.end("Sample response");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Started listening ");
});
