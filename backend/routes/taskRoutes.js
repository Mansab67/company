const express = require('express');
const Task = require('../models/Tasks');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

// Create a new task
router.post('/', authenticateToken, async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);  
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all tasks
router.get('/', authenticateToken, async (req, res) => {
    try {
        const tasks = await Task.find();  // Get all tasks
        res.json(tasks);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get a specific task by ID
router.get('/:id', authenticateToken, async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);  // Find task by ID
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update an existing
router.put('/:id', authenticateToken, async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);  // Return the updated task
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a task by ID
router.delete('/:id', authenticateToken, async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
