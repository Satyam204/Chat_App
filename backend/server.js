const express = require("express");
const dotenv = require("dotenv");
//const { chats } = require("./data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

dotenv.config();
connectDB();

const PORT = process.env.PORT;

app.use("/api/user", userRoutes);

// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });

app.listen(PORT, console.log("running"));
