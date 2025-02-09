const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register User" });
});

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login User" });
});

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current User" });
});

module.exports = { registerUser, loginUser, currentUser };
