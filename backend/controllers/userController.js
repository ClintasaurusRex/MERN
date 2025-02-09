const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  console.log("Register endpoint hit", req.body);
  res.json({ message: "Register User: Successful" });
});

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login User: Successful" });
});

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current User" });
});

module.exports = { registerUser, loginUser, currentUser };
