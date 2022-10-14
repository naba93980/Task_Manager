const { TaskCollection } = require("../models/tasks");
const asyncWrapper = require("../middleware/wrapper");
const { createCustomError } = require("../error/custom-error");
const createTask = asyncWrapper(async (req, res, next) => {
  const task = await TaskCollection.create(req.body);
  res.status(201).json(task);
});

const getAllTasks = asyncWrapper(async (req, res, next) => {
  const tasks = await TaskCollection.find({});
  res.status(200).json(tasks);
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const tasks = await TaskCollection.findOne({ _id: taskID });
  if (!tasks) {
    next(createCustomError(`No task with id : ${taskID}`, 404));
    return;
  }
  res.status(200).json(tasks);
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const { name, completed } = req.body;
  const tasks = await TaskCollection.findOneAndUpdate(
    { _id: taskID },
    { name, completed },
    { new: true, runValidators: true }
  );
  if (!tasks) {
    next(createCustomError(`No task with id : ${taskID}`, 404));
    return;
  }
  res.status(200).json(tasks);
});

const editTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const { name, completed } = req.body;
  const tasks = await TaskCollection.findOneAndUpdate(
    { _id: taskID },
    { name, completed },
    { new: true, runValidators: true, overwrite: true }
  );
  if (!tasks) {
    next(createCustomError(`No task with id : ${taskID}`, 404));
    return;
  }
  res.status(200).json(tasks);
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const tasks = await TaskCollection.findOneAndDelete({ _id: taskID });
  if (!tasks) {
    next(createCustomError(`No task with id : ${taskID}`, 404));
    return;
  }
  res.status(200).json(tasks);
});

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
  editTask,
};
