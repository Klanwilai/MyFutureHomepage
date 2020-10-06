const { validationResult } = require("express-validator");

exports.getBlogs = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        msg: "Some message.",
      },
    ],
  });
};

exports.createBlog = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ message: "Validation failed.", errors: errors.array() });
  }
  const title = req.body.title;
  const content = req.body.content;

  res.status(201).json({
    message: "Post created!",
    post: {
      id: new Date().toISOString(),
      title: title,
      content: content,
      createdAt: new Date(),
    },
  });
};
