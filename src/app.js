const express = require("express");
const app = express();
const morgan = require("morgan");

// initialize middleware
app.use(morgan("dev"));

// init database

// init routes

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Initialization successful",
  });
});

// handle errors

module.exports = app;
