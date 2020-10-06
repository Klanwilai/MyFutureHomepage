const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { connection } = require("./db");

const blogRoutes = require("./routes/blogRoutes");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/blog", blogRoutes);

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
