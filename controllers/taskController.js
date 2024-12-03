const userService = require('../services/taskService');

// Get all users
const getTasks = async (req, res) => {
    try {
        const users = await userService.getAllTasks();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get user by ID
const getTask = async (req, res) => {
    try {
        const user = await userService.getTaskById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a user
const createTask = async (req, res) => {
    try {
        console.log("ssssssssssss")
        const newUser = await userService.createTask(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a user
const updateTask = async (req, res) => {
    try {
        const updatedUser = await userService.updateTask(req.params.id, req.body);
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a user
const deleteTask = async (req, res) => {
    try {
        const deletedUser = await userService.deleteTask(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
};
