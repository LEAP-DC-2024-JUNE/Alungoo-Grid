const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log(`Connected to Mongo DB on ${MONGO_URL}`);
  } catch (err) {
    console.log("MongoDB connection error", err);
    process.exit(1); //hervee aldaa garwal uregjluulj asaahguigeer zogsooh uildel
  }
};
module.exports = connectDb;
