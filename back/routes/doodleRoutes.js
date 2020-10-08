const express = require("express");
const {
  body
} = require("express-validator");

const doodleController = require("../controllers/doodleController");

const router = express.Router();

// GET /doodle/doodles
router.get("/doodles", doodleController.getDoodles);

// POST /blog/post
router.post("/post", [
  body('title').trim().isLength({
    min: 5
  }),
  body('imageURL').trim().isLength({
    min: 5
  }),
  body('description').trim().isLength({
    min: 5
  }),
  body('alt').trim().isLength({
    min: 5
  })
], doodleController.createDoodle);


module.exports = router;