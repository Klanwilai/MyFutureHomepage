const {
  validationResult
} = require("express-validator");

const BlogModel = require('../models/blogModel');

exports.getBlogs = (req, res, next) => {
  BlogModel.find().then(result => {
    res.status(200).json({
      message: "fetched all blogs",
      blogs: result
    });
  }).catch(err => {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  });
};

exports.getBlog = (req, res, next) => {
  const blogId = req.params.blogId;
  BlogModel.findById(blogId).then(result => {
    if (!result) {
      const error = new Error('Could not find blog post.');
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({
      message: "blog fetched",
      blog: result
    });
  }).catch(err => {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  });
}

exports.createBlog = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed.');
    error.statusCode = 422;
    throw error;
  }

  const title = req.body.title;
  const content = req.body.content;
  const blog = new BlogModel({
    title: title,
    content: content
  });

  blog.save().then(result => {
    res.status(201).json({
      message: "Post created!",
      post: {
        result
      },
    });
  }).catch(err => {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  });

};