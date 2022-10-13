const express = require('express');
const router = express.Router();
const { getAllTasks, getTask, createTask, deleteTask, updateTask, editTask } = require('../controllers/tasks')

router.get('/', getAllTasks);
router.post('/', createTask);
router.get('/:id', getTask);
router.patch('/:id', updateTask);
router.put('/:id', editTask);
router.delete('/:id', deleteTask);

module.exports = {
    tasks: router,
}