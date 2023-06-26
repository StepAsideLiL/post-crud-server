const postModel = require("../models/post.model");

const getAllPosts = (req, res) => {
  //
};

const getPost = (req, res) => {
  const postId = req.params.id;

  postModel
    .findById(postId)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getLoggedinUserPost = (req, res) => {
  const email = req.params.email;

  postModel
    .find({ email: email })
    .exec()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const createPost = (req, res) => {
  const postData = req.body;

  const post = new postModel(postData);

  post
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updatePost = (req, res) => {
  const postId = req.params.id;
  const postData = req.body;

  postModel
    .findByIdAndUpdate(postId, postData, { new: true })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deletePost = (req, res) => {
  const postId = req.params.id;

  postModel
    .findByIdAndDelete(postId)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getAllPosts,
  getLoggedinUserPost,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
