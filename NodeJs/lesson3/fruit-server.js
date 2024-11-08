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
  detailedItems = JSON.parse(detailedContent);

  let itemWithMaxId = briefItems.reduce((a, b) => (a.id > b.id ? a : b));
  currentId = itemWithMaxId.id + 1;
};
const saveDateToFile = () => {
  fs.writeFile(
    "./fruit-data/detailed.json",
    JSON.stringify(detailedItems),
    () => console.log("Updated detailed info")
  );
  fs.writeFile("./fruit-data/brief.json", JSON.stringify(briefItems), () =>
    console.log("Updated brief info")
  );
};

const parseBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunck) => {
      body += chunck.toString();
    });
    req.on("end", () => resolve(JSON.parse(body)));
    req.on("error", (err) => reject(err));
  });
};

const server = http.createServer(async (request, response) => {
  //catching path (url)
  const reqUrl = url.parse(request.url, true);
  const pathname = reqUrl.pathname;
  //catchin method
  const method = request.method;

  //1. POsT method --> create data
  if (pathname === "/api/goods/" && method === "POST") {
    //create
    const data = await parseBody(request); // <-- hereglechees irsen data
    console.log(data);
    const detailedItem = {
      id: currentId,
      from: data.from,
      nutrients: data.nutrients,
      quantity: data.quantity,
      description: data.description,
    }; //<-- hadgalj bga detailed data medeelel
    detailedItems.push(detailedItem);

    const briefItem = {
      id: currentId,
      productName: data.productName,
      price: data.price,
      organic: data.organic,
    };
    briefItems.push(briefItem);

    saveDateToFile();

    currentId++;

    response.writeHead(201, { "Content-type": "application/text" });
    response.end("Successfully created an item");

    // 2. GET method--> get a data
  } else if (pathname === "/api" && method === "GET") {
    response.writeHead(200, { "Content-text": "application/json" });
    response.end(JSON.stringify(briefItems));

    // 3. GET method--> get by ID
  } else if (pathname.startsWith("/api/goods/") && method === "GET") {
    const paths = pathname.split("/"); // array ruu hiij ogj bn
    const id = parseInt(paths[3]);
    const selectedItem = detailedItems.find((item) => item.id === id);
    if (selectedItem) {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(selectedItem));
    } else {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ error: "Item is not found" }));
    }

    // 4. PUT method --> update the data
  } else if (pathname.startsWith("/api/goods/") && method === "PUT") {
    const paths = pathname.split("/");
    const id = parseInt(paths[3]);

    // hadgalsan elemnetuud dotroos tuhain ogogdson id tai medeeliin indexiiig ni awch bn
    const index = detailedItems.findIndex((item) => item.id === id);

    if (index === -1) {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ error: "Item not found" }));
    } else {
      const data = await parseBody(request);
      // Items[index] = { id: detailedItems[index].id, ...data};
      detailedItems[index] = {
        ...detailedItems[index],
        from: data.from,
        nutrients: data.nutrients,
        quantity: data.quantity,
        description: data.description,
      };
      briefItems[index] = {
        ...briefItems[index],
        productName: data.productName,
        price: data.price,
        organic: data.organic,
      };

      saveDateToFile();

      response.writeHead(200, { "Content-Type": "application/text" });
      response.end("Item is updated");
    }

    // 5. DELETE method--> delete a data
  } else if (pathname.startsWith("/api/items") && method === "DELETE") {
    const paths = pathname.split("/");
    const id = parseInt(paths[3]);
    const index = detailedItems.findIndex((item) => item.id === id);
    if (index === -1) {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ error: "Item not found" }));
    } else {
      detailedItems.splice(index, 1);
      briefItems.splice(index, 1);

      saveDateToFile();

      response.writeHead(200, { "Content-Type": "apllication/text" });
      responseCookiesToRequestCookies.end("Item id deleted");
    }
  } else {
    response.writeHead(404);
    response.end(JSON.stringify({ error: "Item not found" }));
  }
});
server.listen(3001, "127.0.0.1", () => {
  console.log("Initializing the system ...");
  initialize();
  console.log("Initialized the system");
  console.log("Started listening to 127.0.0.1 on 3001");
});
