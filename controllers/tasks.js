const getAllTasks = (req, res) => {
    res.send('all items from files');
}

const createTask = (req, res) => {
    res.send('create task');
}

const getTask = (req, res) => {
    res.send('get task');
}
const updateTask = (req, res) => {
    res.send('update task');
}

const deleteTask = (req, res) => {
    res.send('delete task');
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask,
}