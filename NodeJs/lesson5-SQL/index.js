const express = require("express");
var cors = require("cors");
const app = express();
const PORT = 3001;

const expenseRouter = require("./routes/expense-router"); // Routeraa oruulj irj bn
app.use(express.json());
app.use(cors());
app.use("/api/expenses", expenseRouter); //yamar ued routing damjuulah um be, huselt orj irwel iishee yawuulna gsn vg.
app.listen(PORT, () => console.log(`server running on ${PORT}`)); // serveree asaaanaa!
