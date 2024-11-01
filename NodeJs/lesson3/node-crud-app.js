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
const server = http.createServer(async (request, response) => {
  //catching path (url)
  const reqUrl = url.parse(request.url, true);
  const pathname = reqUrl.pathname; // asynchronous
  //catching method
  const method = request.method;

  if (pathname === "/api/items" && method === "POST") {
    //create
    console.log("POST method is called");
    const data = await parseBody(request); //<=== hereglegchees irsen data medeelel
    const newItem = { id: currentId++, ...data }; ////<=== hadgalj bga data medeelel
    items.push(newItem);

    response.writeHead(201, { "Content-Type": "application/json" });
    response.end(JSON.stringify(newItem));
  } else if (pathname === "/api/items" && method === "GET") {
    //read all
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(items));
  } else if (pathname.startsWith("/api/items") && method === "GET") {
    // read single item
    // GET /api/items/14
    const paths = pathname.split("/");
    const id = parseInt(paths[3]);
    const selectedItem = items.find((item) => item.id === id);

    if (selectedItem) {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(selectedItem));
    } else {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ error: "item is not found" }));
    }
  } else if (pathname.startsWith("/api/items") && method === "PUT") {
    // update
    // PUT /api/items/14 header, body  (14 replace to body)
    const paths = pathname.split("/");
    const id = parseInt(paths[3]);

    //hadgalsan elemnetuud dotroos tuhain ogogdsun id tei medeeliig indexiig awna
    const index = items.findIndex((item) => item.id === id);

    if (index === -1) {
      //oldoogui bol
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ error: "item is not found" }));
    } else {
      //oldchihson bol
      const data = await parseBody(request); //item bwal
      // items [index] = {id: items[index].id, ...data};
      items[index] = { ...items[index], ...data };
      // ... id-g awaa!

      //shinechlegdsen utga response ogson
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(items[index]));
    }
  } else if (pathname.startsWith("/api/items") && method === "DELETE") {
    //delete
    const paths = pathname.split("/");
    const id = parseInt(paths[3]);
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) {
      //oldoogui bol
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ error: "item is not found" }));
    } else {
      const deletedItem = items.splice(index, 1)[0];
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(
        JSON.stringify({ message: "item deleted", item: deletedItem })
      );
    }
  } else {
    //page not found
    response.writeHead(404, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ error: "item is not found" }));
  }
  //   response.end("Sample response");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Started listening ");
});
