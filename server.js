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
const mongoose = require("mongoose");
// import routes
const homeRoute = require("./routes/homeRoute");
const { uri, be_port } = require("./be_vals.js");

// Server Config
const app = express();
const server = createServer(app);
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
// config CORS for React FrontEnd
const io = new Server(server, {
  cors: {
    origin: uri,
  },
});

// DB Config
// const mongoDB =
//   "mongodb+srv://zenHotDamn:feng-shui@cluster0.5ubnnhe.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.once("connected", () => {
//   console.log("Mongo Connected!");
// });

// Routes
app.use("/", homeRoute);

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
