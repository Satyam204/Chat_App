const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data");
const connectDB = require("./config/db");

const app = express();

dotenv.config();
connectDB();

const PORT = process.env.PORT;

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.listen(PORT, console.log("running"));
