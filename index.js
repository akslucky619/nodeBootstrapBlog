const path = require("path");

const { engine } = require("express-edge");

const express = require("express");

const app = new express();

app.use(express.static("public"));
app.use(engine);

app.set("views", `${__dirname}/views`);

app.get("/", (req, res) => {
  res.render('index');
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/about.html"));
});
app.get("/post", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/post.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/contact.html"));
});

app.listen(5000, () => {
  console.log("App listening on port 5000");
});
