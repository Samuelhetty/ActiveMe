const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// In-memory database for demo purposes
let users = [];

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Find user in the database
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        res.status(200).json({ message: 'Login successful', user });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

// Signup endpoint
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    // Check if the username (email) is already taken
    if (users.some(user => user.username === username)) {
        res.status(409).json({ message: 'Username (email) already exists' });
        return;
    }

    // Create a new user with email as the username
    const newUser = { username, email, password };
    users.push(newUser);

    res.status(201).json({ message: 'Signup successful', user: newUser });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
