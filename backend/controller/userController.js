const asynHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asynHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.staus(400);
    throw new Error("Please Fill The Require Fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Email Already Registered");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      pic: user.pic,
    });
  } else {
    res.status(400);
    throw new Error("Failed to create the user");
  }
});

module.exports = { registerUser };
