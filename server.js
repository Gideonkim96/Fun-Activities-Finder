const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the provided port or default to 3000

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Welcome to the Fun Activities Website!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
