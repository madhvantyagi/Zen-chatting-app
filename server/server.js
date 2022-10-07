/*
backend server file:
    - Server Config (websockets)
    - Routes Config
*/

// import modules
const express = require("express");
const app = express();
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const bodyParser = require("body-parser");
const { be_port, uri } = require("./be_vals.js");

// Server Config
const server = createServer(app);
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use("/user", require("./routes/user")); // user routes

// DB Config
require("./models/database/connection");

// config CORS for React FrontEnd
const io = new Server(server, {
  cors: {
    origin: uri,
  },
});

// Socket IO
io.on("connection", (socket) => {
  socket.on("message", (message) => {
    console.log(message);
    io.emit("message", message);
  });
});

// Listen Express App
const PORT = be_port;
server.listen(PORT, () => {
  console.log(`listening @ Port: ${PORT}`);
});
