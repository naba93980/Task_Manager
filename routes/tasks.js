const express = require('express');
const router = express.Router();
const { getAllTasks, getTask, createTask, deleteTask, updateTask } = require('../controllers/tasks')

router.get('/', getAllTasks);
router.post('/', createTask);
router.get('/:id', getTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = {
    tasks: router,
}