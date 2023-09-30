const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000; // Use the provided port or default to 3000

// Middleware to parse incoming JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (index.html, CSS, JavaScript, etc.) from the 'public' directory
app.use(express.static('public'));

// Define a route for the homepage
// app.get('/', (req, res) => {
//   res.send('Welcome to the Fun Activities Website!');
// });

// Handle POST requests from the client
app.post('/submit-form', (req, res) => {
  const formData = req.body; // Form data sent by the client
  // Process and store the form data as needed
  console.log('Received form data:', formData);
  res.status(200).send('Form data received successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
