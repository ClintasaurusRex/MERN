const express = require("express");
const router = express.Router();
const { getTasks, updateTask, deleteTask, setTask } = require("../controllers/taskControllers");

router.get("/", getTasks);

router.post("/", setTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

module.exports = router;
