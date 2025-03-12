const express = require('express');
const app = express();
const routes = require('./routes'); 
require('dotenv').config();
const { connectDB, getConnection } = require('./database');
const port = 8000;

// Middleware to parse JSON bodies
app.use(express.json());  // Add this line to parse JSON data in the request body

app.use(routes);  // Use routes

app.get('/ping', (req, res) => {
    res.send('Pong!');
});

connectDB();

app.get('/', (req, res) => {
    console.log("Connected");
    res.send(getConnection());
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
