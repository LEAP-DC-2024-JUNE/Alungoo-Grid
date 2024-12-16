const express = require("express");
const connectMongo = require("./configs/mongo-db");
const PORT = 8000;
const userRouter = require("./routers/userRouter");

const app = express();
app.use(express.json());
app.use("/user", userRouter);
connectMongo();
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
