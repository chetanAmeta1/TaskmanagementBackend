const userRepository = require('../repositories/taskRepository');

const getAllTasks = async () => {
    return await userRepository.findAllTasks();
};

const getTaskById = async (id) => {
    return await userRepository.findTaskById(id);
};
 

const createTask = async (userData) => {
    // Example: Add validation or business rules here
    return await userRepository.createTask(userData);
};

const updateTask = async (id, userData) => {
    return await userRepository.updateTask(id, userData);
};

const deleteTask = async (id) => {
    return await userRepository.deleteTask(id);
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask 
};
