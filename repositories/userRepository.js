const User = require('../models/userModel');

// Fetch all users
const findAllUsers = async () => {
    return await User.find();
};

// Fetch a user by ID
const findUserById = async (id) => {
    return await User.findById(id);
};
// Fetch a user by Email or password
const findUserByEmail = async (email) => { 
    let data = await User.findOne({"email":email}); 
    return data;
};

// Create a new user
const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

// Update a user
const updateUser = async (id, userData) => {
    return await User.findByIdAndUpdate(id, userData, { new: true });
};

// Delete a user
const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
};

module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser,
    findUserByEmail
};
