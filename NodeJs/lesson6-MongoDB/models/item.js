const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  createdData: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model("item", itemSchema);
