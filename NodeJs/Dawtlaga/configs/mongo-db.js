const mongoose = require("mongoose");

const connectMongo = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://duluuf:26cbDTaCYcsgTqw0@cluster1.pyncrqd.mongodb.net/Alungoo"
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error", err);
    process.exit(1);
  }
};
module.exports = connectMongo;
