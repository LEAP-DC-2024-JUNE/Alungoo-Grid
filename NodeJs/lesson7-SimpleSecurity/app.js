const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./configs/mongoDBConfig");
const authRoutes = require("./routers/authRouter");
const morgan = require("morgan");

//morgan
//load env variables
dotenv.config();

//Connect DB
connectDb();

const app = express();
app.use(morgan("dev")); //this is middleware-uud shuu
app.use(express.json()); //bodyParse shdee //this is middleware-uud shuu
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
