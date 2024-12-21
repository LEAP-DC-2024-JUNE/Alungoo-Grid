const Blog = require("../models/blogSchema");

// Create anew blog
exports.createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const author = req.user._id;

    if (!title || !content) {
      return res.status(400).json({
        status: "fail",
        message: "Title and content are required",
      });
    }
    if (!author) {
      return res.status(401).json({
        status: "fail",
        message: "Please login",
      });
    }

    const newBlog = await Blog.create({
      title,
      content,
      author,
    });

    res.status(201).json({
      status: "success",
      message: "The blog is created",
      blog: newBlog,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};
// Read a single blog by blogID
exports.readSingleBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({
        status: "fail",
        message: "Blog not found",
      });
    }

    return res.status(200).json({
      status: "success",
      data: { blog },
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      status: "fail",
      message: "Internal server error",
    });
  }
};

// Read all blogs by author
exports.readBlogsByAuthor = async (req, res) => {
  try {
    const { authorId } = req.params;
    const blogs = await Blog.find({ author: authorId });
    if (!blogs) {
      return res.status(404).json({
        status: "fail",
        message: "No blogs found for the author",
      });
    }
    return res.status(200).json({
      status: "success",
      data: { blogs },
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      status: "fail",
      message: "Internal server error",
    });
  }
};
