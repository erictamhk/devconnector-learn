const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Input Validation
const validatePostInput = require("../../validation/post");

// Load Post model
const Post = require("../../models/Post");

// Load Profile model
const Profile = require("../../models/Profile");

// Load User model
const User = require("../../models/User");

// @route   GET api/post/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

// @route   GET api/posts
// @desc    Get post
// @access  Public
router.get("/", (req, res) => {
  const errors = {};
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => {
      errors.postnotfound = "No posts found.";
      console.log(err);
      res.status(404).json({ msg: "error", errors, isValid: false });
    });
});

// @route   GET api/posts/:id
// @desc    Get post by id
// @access  Public
router.get("/:id", (req, res) => {
  const errors = {};
  Post.findById(req.params.id)
    .then(post => {
      if (post == null) throw "No post found with that ID.";
      res.json(post);
    })
    .catch(err => {
      errors.postnotfound = "No post found with that ID.";
      console.log(err);
      res.status(404).json({ msg: "error", errors, isValid: false });
    });
});

// @route   POST api/posts
// @desc    create post
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    // Check Validation
    if (!isValid) {
      return res.status(400).json({ msg: "error", errors, isValid });
    }
    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id
    });

    newPost.save().then(post => res.json(post));
  }
);

// @route   DELETE api/posts/:id
// @desc    Detele post
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          // Check for post owner
          if (post.user.toString() != req.user.id) {
            errors.notauthorized = "User not authorized.";
            console.log("Unauthorized request for delete post!");
            return res
              .status(401)
              .json({ msg: "error", errors, isValid: false });
          }

          // Delete
          post.remove().then(() => res.json({ success: true }));
        })
        .catch(err => {
          errors.postnotfound = "No post found with that ID.";
          console.log(err);
          res.status(404).json({ msg: "error", errors, isValid: false });
        });
    });
  }
);

module.exports = router;
