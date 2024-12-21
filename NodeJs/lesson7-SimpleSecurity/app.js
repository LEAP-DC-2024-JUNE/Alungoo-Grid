const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./configs/mongoDBConfig");
const authRoutes = require("./routers/authRouter");
const blogRoutes = require("./routers/blogRouter");
const morgan = require("morgan");
const cors = require("cors");

//morgan
//load env variables
dotenv.config();

//Connect DB
connectDb();

const app = express();
app.use(morgan("dev")); //this is middleware-uud shuu
app.use(express.json()); //bodyParse shdee //this is middleware-uud shuu
app.use(cors({ origin: "http://localhost:3000" }));
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
