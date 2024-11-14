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
// hereglegchees irsen medeelliig unshdag function (unshij systemd hadgaldag)
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

//serveree vvsgej ogj bn
const server = http.createServer(async (request, response) => {
  // Set CORS headers
  response.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins for development
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  ); // Allow specific HTTP methods
  response.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Allow specific headers

  //catching path (url)
  const reqUrl = url.parse(request.url, true); //huselt orj irsen URL
  const pathname = reqUrl.pathname; //huselteed pathname awla
  //catchin method
  const method = request.method; //yamar toroliin method um be
  if (method === "OPTIONS") {
    response.writeHead(200); //responsepond with 200 OK for preflight
    response.end();
    return; // End the response for the preflight request
  }

  //1. POsT method --> create data
  if (pathname === "/api/goods/" && method === "POST") {
    //create
    const data = await parseBody(request); // <-- hereglechees irsen data,yamar medeelel vvsgehee huselteesee awj bn
    console.log(data);
    const detailedItem = {
      id: currentId,
      productName: data.productName,
      from: data.from,
      nutrients: data.nutrients,
      quantity: data.quantity,
      description: data.description,
    }; //<-- hadgalj bga detailed data medeelel
    detailedItems.push(detailedItem); //deer vvsgesen array ruugaa nemj hj ogj bn

    const briefItem = {
      id: currentId,
      productName: data.productName,
      price: data.price,
      organic: data.organic,
    };
    briefItems.push(briefItem);

    saveDateToFile();

    currentId++;

    response.writeHead(201, { "Content-type": "application/text" }); //huselt ogson hereglegchruu hariu ogj bn
    response.end("Successfully created an item");

    // 2. GET method--> get a data
  } else if (pathname === "/api" && method === "GET") {
    response.writeHead(200, { "Content-text": "application/json" });
    response.end(JSON.stringify(briefItems));

    // 3. GET method--> get by ID
  } else if (pathname.startsWith("/api/goods/") && method === "GET") {
    const paths = pathname.split("/"); // paths gdg array ruu hiij ogj bn
    const id = parseInt(paths[3]); // paths gdg array iin 3dahid indexiig salgaj awj bn, irsen ni data STRING bh uchiraas INT bolgoj horwvvlj bn
    const selectedItem = detailedItems.find((item) => item.id === id); //salgaj awsan ID g detailedItems s haij bn, find loop-r each iterationr yawj bn
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
    //tiim element oldoogui yu
    if (index === -1) {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ error: "Item not found" }));
    } else {
      //oldchihson bol
      const data = await parseBody(request); //oldsonoo iim blgoj oorchil
      // Items[index] = { id: detailedItems[index].id, ...data};
      detailedItems[index] = {
        ...detailedItems[index],
        ...data,
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
  } else if (pathname.startsWith("/api/goods/") && method === "DELETE") {
    const paths = pathname.split("/");
    const id = parseInt(paths[3]); //extract ID from the path
    const index = detailedItems.findIndex((item) => item.id === id);
    if (index === -1) {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ error: "Item not found" }));
    } else {
      detailedItems.splice(index, 1); //detailsItem-n tuhain index-s 1 elementiig ustga
      briefItems.splice(index, 1);

      saveDateToFile();

      response.writeHead(200, { "Content-Type": "apllication/text" });
      response.end("Item is deleted");
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
