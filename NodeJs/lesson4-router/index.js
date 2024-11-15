const express = require("express");
const app = express();
const PORT = 3003;
const itemsRouter = require("./routes/items"); // Routeraa oruulj irj bn
app.use(express.json()); //

app.use("/api/items", itemsRouter); //yamar ued routing damjuulah um be, huselt orj irwel iishee yawuulna gsn vg.

app.listen(PORT, () => console.log(`server running on ${PORT}`)); // serveree asaaanaa!
