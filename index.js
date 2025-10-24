// Import the Express library
const express = require('express');

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory array to store items
let items = [
  { id: 1, name: 'First Item' },
  { id: 2, name: 'Second Item' }
];

// Route to get all items
app.get('/items', (req, res) => {
  res.json(items);
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});