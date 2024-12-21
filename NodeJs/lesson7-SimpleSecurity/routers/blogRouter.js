const express = require("express");
const blogController = require("../controllers/blogControllers");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

//Create a blog
router.post("", protect, blogController.createBlog);

//Get a single blog by blogId
router.get("/:blogId", blogController.readSingleBlog);
//Get a list of blogs by authorId
router.get("/author/:authorId", blogController.readBlogsByAuthor);

module.exports = router;

//appjs-->router-->controller--> model
