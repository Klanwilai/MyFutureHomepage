const express = require("express");
const {
  body
} = require("express-validator");

const blogController = require("../controllers/blogController");

const router = express.Router();

// GET /blog/blogs
router.get("/blogs", blogController.getBlogs);
// GET /blog/blog/id
router.get('/blog/:blogId', blogController.getBlog);

// POST /blog/post
router.post("/post", [
  body('title').trim().isLength({
    min: 5
  }),
  body('content').trim().isLength({
    min: 5
  })
], blogController.createBlog);

module.exports = router;