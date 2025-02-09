import express from "express";
const router = express.Router();
const { registerUser, loginUser, currentUser } = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", currentUser);

export default router;
