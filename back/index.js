const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const multer = require("multer");
const {
  connection
} = require("./db");

const blogRoutes = require("./routes/blogRoutes");
const doodleRoutes = require("./routes/doodleRoutes");

const app = express();
/* ------------------------------------------------------------------------------------------------------------------------*/
// Will be replaced with firebase firestore or amazon s3
// const fileStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, new Date().toISOString() + "-" + file.originalname);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === "image/png" ||
//     file.mimetype === "image/jpg" ||
//     file.mimetype === "image/jpeg"
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };
/* ------------------------------------------------------------------------------------------------------------------------*/
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/blog", blogRoutes);
app.use("/doodles", doodleRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({
    message: message,
  });
});

mongoose
  .connect(connection)
  .then((result) => {
    console.log("Connected to db successfully");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });