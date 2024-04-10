const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

// Create the Course model
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
