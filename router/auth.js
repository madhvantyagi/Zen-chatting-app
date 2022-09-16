const express = require("express");
const User = require("../model/userSchema");
const router = express.Router();

router.post("/user/create", (req, res) => {
  const name= req.body.name;
  const email= req.body.email;
  console.log(name + " " + email);
  if (!name || !email) {
    return res.send("Invalid username or email");
  }
  User.findOne({ name: name, email: email }).then((user) => {
    if (user) {
      return res.send("User already exist!");
    } else {
      const newUser = new User({ name: name, email: email });
      newUser
        .save()
        .then(() => {
          res.send("User created successfully !");
        })
        .catch((err) => {
          console.log(err);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
});

module.exports = router;
