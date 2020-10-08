const {
  validationResult
} = require("express-validator");

const DoodleModel = require('../models/doodleModel');

exports.getDoodles = (req, res, next) => {
  DoodleModel.find().then(result => {
    res.status(200).json({
      message: "fetched all doodles",
      doodles: result
    });
  }).catch(err => {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  });
};

exports.createDoodle = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed.');
    error.statusCode = 422;
    throw error;
  }

  const title = req.body.title;
  const imageURL = req.body.imageURL;
  const description = req.body.description;
  const alt = req.body.alt;
  const doodle = new DoodleModel({
    title: title,
    imageURL: imageURL,
    description: description,
    alt: alt
  });

  doodle.save().then(result => {
    res.status(201).json({
      message: "Doodle created!",
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