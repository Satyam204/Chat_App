const express = require("express");
const dotenv = require("dotenv");

const { chats } = require("./data");
dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send(chats);
});

app.listen(PORT, console.log("running"));
