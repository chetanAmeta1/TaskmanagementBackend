const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true},
    status: { type: String ,default:0},
}, { timestamps: true });

module.exports = mongoose.model('Tasks', userSchema);