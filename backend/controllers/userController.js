const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  // res.json({ message: "Register User: Successful" });
});

const loginUser = asyncHandler(async (req, res) => {
  // res.json({ message: "Login User: Successful" });
});

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current User" });
});

module.exports = { registerUser, loginUser, currentUser };
