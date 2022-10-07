const mongoose = require("mongoose");

const messages = mongoose.Schema({
  SenderId: { type: String, required: true },
  messages: { type: String, required: true },
  RecieverId: { type: String, required: true },
});

const messageData = mongoose.model("messages", messages);
module.exports = messages;

