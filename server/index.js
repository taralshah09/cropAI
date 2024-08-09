const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(express.json());
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", __dirname + "/views");
require("./geminiapi");
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, (req, res) => {
  console.log("server connected");
});
