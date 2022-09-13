/*
backend server file:
    - Server Config (websockets)
    - Routes Config
*/

// import modules
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
// import routes
const homeRoute = require("./routes/homeRoute");

// Server Config
const app = express();
const server = createServer(app);
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
// config CORS for React FrontEnd
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

// Routes
app.use("/", homeRoute);

// Socket IO
io.on("connection", (socket) => {
  socket.on("message", (message) => {
    console.log(message);
    io.emit("show-message", message);
  });
});

// Listen Express App
const PORT = 8000;
server.listen(PORT, () => {
  console.log(`listening @ Port: ${PORT}`);
});
