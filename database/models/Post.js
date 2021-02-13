const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String },
  description: { type: String },
  content: { type: String },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
