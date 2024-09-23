const mongoose = require('mongoose');

// Task schema
const taskSchema = new mongoose.Schema({
    taskText: { type: String, required: true },
    carbonReduction: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
