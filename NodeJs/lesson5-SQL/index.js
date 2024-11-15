const express = require("express");

const app = express();
const PORT = 3001;

const expenseRouter = require("./routes/expense-router"); // Routeraa oruulj irj bn
app.use(express.json()); //

app.use("/api/expenses", expenseRouter); //yamar ued routing damjuulah um be, huselt orj irwel iishee yawuulna gsn vg.

app.listen(PORT, () => console.log(`server running on ${PORT}`)); // serveree asaaanaa!
