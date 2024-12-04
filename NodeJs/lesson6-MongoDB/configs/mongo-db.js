const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./configs/.env" });
const MONGO_URI = process.env.MONGO_URI;

const connectMongoDb = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.log("MongoDB connection error", err);
    process.exit(1); //asaahguigeer zogsooh uildel
  }
};

module.exports = connectMongoDb; // module ruu hj bn
