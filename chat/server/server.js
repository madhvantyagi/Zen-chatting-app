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
const dotenv = require("dotenv");

// Server Config
const server = createServer(app);
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config();

// routes
app.use("/user", require("./routes/user")); // user routes
const uri = process.env.Uri;

// DB Config
require("./models/database/connection");

// config CORS for React FrontEnd
const io = new Server(server, {
  cors: {
    origin: uri,
  },
});

let room = 1;
let Roomchange = 0;
io.on("connection", (socket) => {
  socket.on("userselect", (serverselect) => {
    socket.join(serverselect);
    socket.on("message", (message) => {
      io.to(serverselect).emit("message", message);
      console.log(message, serverselect);
    });
  });
});
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Listen Express App
const PORT = process.env.Be_port;

server.listen(PORT, () => {
  console.log(`listening @ Port: ${PORT}`);
});
