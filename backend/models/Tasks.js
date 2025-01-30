const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    dueDate: Date,
    priority: String,
    status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' }
});

module.exports = mongoose.model('Task', taskSchema);