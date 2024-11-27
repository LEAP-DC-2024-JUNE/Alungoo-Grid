const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3010;
const MONGO_URI = "mongodb://localhost:27017/db-express-proj";

app.use(express.json());

const itemRouter = require("./routers/itemRouter");

app.use("/api/items", itemRouter);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((error) => console.log("MongoDB connection error", error));

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
