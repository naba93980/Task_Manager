const { TaskCollection } = require("../models/tasks");

const createTask = async (req, res) => {
  try {
    const task = await TaskCollection.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskCollection.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const tasks = await TaskCollection.findOne({ _id: taskID });
    if (!tasks) {
      return res.status(404).json({ mssg: `No task with id : ${taskID}` });
    }
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateTask = async (req, res) => {
  try {
      const { id: taskID } = req.params;
      const { name, completed } = req.body;
    const tasks = await TaskCollection.findOneAndUpdate({ _id: taskID },{name,completed},{new:true,runValidators:true});
    if (!tasks) {
      return res.status(404).json({ mssg: `No task with id : ${taskID}` });
    }
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const tasks = await TaskCollection.findOneAndDelete({ _id: taskID });
    if (!tasks) {
      return res.status(404).json({ mssg: `No task with id : ${taskID}` });
    }
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
};
