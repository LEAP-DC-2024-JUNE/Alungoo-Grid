const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: [true, "A blog must have a title"] },
  content: { type: String, required: [true, "A blog must have a content"] },
  postedDateTime: { type: String, default: Date.now },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
const Blog = mongoose.model("blog", blogSchema);
module.exports = Blog;
