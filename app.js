const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRegistrationRoutes = require('./routes/userRegistrationRoutes');
const userProfileRoutes = require('./routes/userProfileRoutes');
const courseRoutes = require('./routes/courseRoutes');
const courseFiltersPaginationRoutes = require('./routes/courseFiltersPagination/courseFiltersPaginationRoutes');
const errorHandlingMiddleware = require('./middleware/errorHandlingMiddleware');
const logger = require('./logger');

app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://username:password@your-neon-database-url', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

// Routes
app.use('/api/users/register', userRegistrationRoutes);
app.use('/api/users', userProfileRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/courses', courseFiltersPaginationRoutes);


// Error handling middleware
app.use(errorHandlingMiddleware);


// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


logger.info('Server started');