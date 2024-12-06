const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  createdData: { type: Date, required: true, default: Date.now },
  income: { type: String, required: true },
  amount: { type: Number, required: true },
});

module.exports = mongoose.model("item", itemSchema);
