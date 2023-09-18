// app.js
const express = require('express');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(errorHandler);

// Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
