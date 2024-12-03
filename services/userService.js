const userRepository = require('../repositories/userRepository');

const getAllUsers = async () => {
    return await userRepository.findAllUsers();
};

const getUserById = async (id) => {
    return await userRepository.findUserById(id);
};
const getUserByEmail = async (email) => {
    return await userRepository.findUserByEmail(email);
};

const createUser = async (userData) => {
    // Example: Add validation or business rules here
    return await userRepository.createUser(userData);
};

const updateUser = async (id, userData) => {
    return await userRepository.updateUser(id, userData);
};

const deleteUser = async (id) => {
    return await userRepository.deleteUser(id);
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserByEmail
};
