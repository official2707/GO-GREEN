const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Task = require('./models/task'); // Importing the task model

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/taskManager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Save completed task endpoint
app.post('/api/tasks/completed', (req, res) => {
    const completedTask = new Task(req.body);
    completedTask.save()
        .then(() => res.status(201).json({ message: 'Task saved successfully!' }))
        .catch(err => res.status(400).json({ error: err.message }));
});

// Get completed tasks endpoint
app.get('/api/tasks/completed', (req, res) => {
    Task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(500).json({ error: err.message }));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
