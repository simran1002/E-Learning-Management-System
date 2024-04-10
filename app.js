// app.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userProfileRoutes = require('./routes/userProfileRoutes');
const courseRoutes = require('./routes/courseRoutes');
const courseFiltersPaginationRoutes = require('./routes/courseFiltersPaginationRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');
const authRoutes = require('./routes/authRoutes'); // Import authRoutes
const errorHandlingMiddleware = require('./middlewares/errorHandlingMiddleware');
const logger = require('./logger');

app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://simranyadav464:kxZr0rPFpNF9rYHa@cluster0.gylkfug.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

// Authentication
app.use('/api/auth', authRoutes);

// User Profile Management
app.use('/api/users', userProfileRoutes);

// Course Management
app.use('/api/courses', courseRoutes);

// Course Filters and Pagination
app.use('/api/courses', courseFiltersPaginationRoutes);

// Enrollment
app.use('/api/courses', enrollmentRoutes);

// Error handling middleware
app.use(errorHandlingMiddleware);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

logger.info('Server started');
