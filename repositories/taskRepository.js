const User = require('../models/taskModel');

// Fetch all users
const findAllTasks = async () => {
    return await User.find();
};

// Fetch a user by ID
const findTaskById = async (id) => {
    return await User.findById(id);
};
 

// Create a new user
const createTask = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

// Update a user
const updateTask = async (id, userData) => {
    return await User.findByIdAndUpdate(id, userData, { new: true });
};

// Delete a user
const deleteTask = async (id) => {
    return await User.findByIdAndDelete(id);
};

module.exports = {
    findAllTasks,
    findTaskById,
    createTask,
    updateTask,
    deleteTask 
};
