require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.DB_URI;
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9snmkln.mongodb.net/postDB?retryWrites=true&w=majority`;

// Routers.
const postRouder = require("./routes/post.route");

// Middlewares.
app.use(express.json());
app.use(cors({ credentials: true }));

// Root router.
app.get("/", (req, res) => {
  res.send("Hello Post CRUD!");
});

// Bypass
app.use("/api/v1/posts", postRouder);

// DB Connection.
mongoose
  .connect(uri)
  .then(() => {
    app.listen(port, () => {
      console.log(`Post CRUD app listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
