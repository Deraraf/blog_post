import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String, requerd: true },
  description: { type: String, requerd: true },
  catagory: { type: String, requerd: true },
  author: { type: String, requerd: true },
  image: { type: String, requerd: true },
  author_image: { type: String, requerd: true },
  date: { type: Date, default: Date.now() },
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
module.exports = Blog;
