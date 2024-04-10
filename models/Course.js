const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  level: { type: String, required: true },
  // Add other fields as needed
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
