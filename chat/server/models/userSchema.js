const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profiles: { type: String, required: true, default: " ../readimages/inf.jpg" },
});

const User = mongoose.model("USER", userSchema);
module.exports = User;
