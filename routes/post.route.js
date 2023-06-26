const express = require("express");
const {
  getAllPosts,
  getLoggedinUserPost,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/post.controller");

const router = express.Router();

router.get("/", getAllPosts);

router.get("/:id", getPost);

router.get("/user/:email", getLoggedinUserPost);

router.post("/", createPost);

router.patch("/:id", updatePost);

router.delete("/:id", deletePost);

module.exports = router;
