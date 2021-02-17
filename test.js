const mongoose = require("mongoose");

const Post = require("./database/models/Post");

mongoose.connect(
  "mongodb://localhost/node-blog",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    err ? console.log("not connected") : console.log("connected");
  }
);

Post.create(
  {
    title: "My first blog Post",
    description: "Blog post description",
    constent: "Lorem ipsum set amet",
  },
  (err, post) => {
    console.log(err, post);
  }
);
