const mongoose = require("mongoose");

const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  confirmPassword: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;