const express = require('express');
const routes = express.Router();
const User = require('./schema.js'); // Import the User model

// GET route - Retrieve all users
routes.get('/', async (req, res) => {
    try {
        const data = await User.find();  // Fetch all users
        if (!data || data.length === 0) {
            return res.status(404).send('No data found');
        }
        res.json({ message: 'Data received', data });
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

// DELETE route - Delete a user by ID
routes.delete('/del/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const data = await User.findByIdAndDelete(id);  // Delete user by ID
        if (!data) {
            return res.status(404).send('User not found');
        }
        res.json({ message: 'Data deleted successfully', data });
    } catch (error) {
        res.status(500).send('Error deleting data');
    }
});

// PUT route - Update a user by ID
routes.put('/put/:id', async (req, res) => {
    const { name, des, country } = req.body;  // Get data from body
    const { id } = req.params;  // Get ID from params
    try {
        const data = await User.findByIdAndUpdate(id, { name, des, country }, { new: true });
        if (!data) {
            return res.status(404).send('User not found');
        }
        res.json({ message: 'Data modified successfully', data });
    } catch (error) {
        res.status(500).send('Error updating data');
    }
});

// POST route - Create a new user
routes.post('/post', async (req, res) => {
    const { name, des, country } = req.body;  // Get data from body
    try {
        const newUser = new User({ name, des,country });
        await newUser.save();  // Save the new user
        res.status(201).json({ message: 'Data received successfully', data: newUser });
    } catch (error) {
        res.status(500).send('Error saving data');
    }
});

module.exports = routes;
