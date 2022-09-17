const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

// GET all users
router.get("/", async (req, res) => {
  const users = await User.find();

  try {
    res.json(users);
  } catch (err) {
    res.send(err);
  }
});

// GET user by username
router.get("/:username", async (req, res) => {
  const user = await User.findOne({ username: req.params.username });

  try {
    res.json(user);
  } catch (err) {
    res.send(err);
  }
});

// POST new user
router.post("/create", async (req, res) => {
  // Reading Inputs
  const username = req.body.username;
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  console.log(name, email, password);

  // Backend Validations for proper inputs
  if (!name || !email || !password || !username) {
    return res.send("Invalid Entries! Please Try Again!");
  }

  // if user already exists : Don't Create User
  User.findOne({ email: email } || { username: username }).then((user) => {
    if (user) res.send("Email or Username already exists!");
    else {
      createNewUser(username, name, email, password); // Create New User
    }
  });

  // Create New User
  async function createNewUser(username, name, email, password) {
    // If User is new: Create User Object
    const newUser = new User({
      username: username,
      name: name,
      email: email,
      password: password,
    });

    // Save User Or Throw Exception
    try {
      const response = await newUser.save();
      res.send(response);
    } catch (err) {
      res.send(err);
    }
  }
});

module.exports = router;
