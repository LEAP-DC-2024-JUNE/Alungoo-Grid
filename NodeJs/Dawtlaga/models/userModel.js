const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide your name"],
  },
  age: {
    type: Number,
    required: [true, "please provide your age"],
  },
});

module.exports = mongoose.model("users", userSchema);
