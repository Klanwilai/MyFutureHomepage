const express = require("express");
const { body } = require("express-validator");

const blogController = require("../controllers/blogController");

const router = express.Router();

// GET /blog/blogs
router.get(
  "/blogs",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  blogController.getBlogs
);
// POST /blog/post
router.post("/post", blogController.createBlog);

module.exports = router;
