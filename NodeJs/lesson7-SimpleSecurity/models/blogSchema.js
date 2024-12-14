const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  maxlength: 40,
  content: { type: String, required: true },
  postedDate: { type: String, required: true },
  author: { type: String },
});

module.exports = mongoose.model("blog", blogSchema);
