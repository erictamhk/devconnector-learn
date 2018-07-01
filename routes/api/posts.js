const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Input Validation
const validatePostInput = require("../../validation/post");

// Load Post model
const Post = require("../../models/Post");

// Load User model
const User = require("../../models/User");

// @route   GET api/post/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

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

module.exports = router;
