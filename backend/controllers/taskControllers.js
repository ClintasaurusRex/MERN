const getTasks = (req, res) => {
  res.status(200).json({ message: "Get all tasks" });
};

const setTask = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please enter a task");
  }

  res.status(201).json({ message: "Create a task" });
};

const updateTask = (req, res) => {
  res.status(200).json({ message: `Update task ${req.params.id}` });
};

const deleteTask = (req, res) => {
  res.status(200).json({ message: `Delete task ${req.params.id}` });
};

module.exports = { getTasks, setTask, updateTask, deleteTask };
