const mongoose = require("mongoose");

const Chat = mongoose.Schema({
  User: {
    type: String,
  },
  chatUser: {
    type: Array,
  },
});

const outerChat = mongoose.model("outerChat", Chat);
module.exports = outerChat;
