const path = require("path");

const { engine } = require("express-edge");

const express = require("express");

const mongoose = require("mongoose");

const app = new express();

mongoose.connect("mongodb://localhost/node-js-blog");

app.use(express.static("public"));
app.use(engine);

app.set("views", `${__dirname}/views`);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/post", (req, res) => {
  res.render("post");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(5000, () => {
  console.log("App listening on port 5000");
});
