const dotenv = require("dotenv");
const express = require("express");
const connectMongoDb = require("./configs/mongo-db");
const cors = require("cors");

const app = express();
dotenv.config({ path: "./configs/.env" });

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
const itemRouter = require("./routers/itemRouter");

app.use("/api/item", itemRouter);

connectMongoDb();

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
