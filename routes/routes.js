// routes.js
const express = require('express');
const router = express.Router();

// Sample route for the home page
router.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});

// Route for user info
router.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// Route for creating a new user
router.post('/user', (req, res) => {
  const newUser = req.body;
  // Logic for creating a new user here
  res.status(201).json({
    message: 'User created successfully',
    user: newUser
  });
});

module.exports = router;
