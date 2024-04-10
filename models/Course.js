const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: String,
  level: String,
  // Other course properties...
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
