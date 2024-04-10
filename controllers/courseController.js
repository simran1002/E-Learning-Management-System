const Course = require('../models/Course');

const getCourses = async (req, res) => {
  try {
    // Fetch all courses
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCourse = async (req, res) => {
  try {
    // Create a new course
    const { title, category, level, description } = req.body;
    const course = new Course({
      title,
      category,
      level,
      description
    });
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCourseById = async (req, res) => {
  try {
    // Fetch a course by ID
    const courseId = req.params.courseId;
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCourse = async (req, res) => {
  try {
    // Update a course
    const courseId = req.params.courseId;
    const { title, category, level, description } = req.body;
    const updatedCourse = await Course.findByIdAndUpdate(courseId, {
      title,
      category,
      level,
      description
    }, { new: true });
    if (!updatedCourse) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.json(updatedCourse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCourse = async (req, res) => {
  try {
    // Delete a course
    const courseId = req.params.courseId;
    const deletedCourse = await Course.findByIdAndDelete(courseId);
    if (!deletedCourse) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getCourses, createCourse, getCourseById, updateCourse, deleteCourse };
