const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    email: { type: String, require: true },
    title: { type: String, require: true },
    body: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
