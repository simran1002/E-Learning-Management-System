const Course = require('../models/Course');
const User = require('../models/User');

const enrollCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const userId = req.user.id;

    // Check if the user is already enrolled in the course
    const user = await User.findById(userId).populate('enrolledCourses');
    if (user.enrolledCourses.some(course => course._id.toString() === courseId)) {
      return res.status(400).json({ error: 'User is already enrolled in this course' });
    }

    // Enroll the user in the course
    await User.findByIdAndUpdate(userId, { $push: { enrolledCourses: courseId } });
    res.json({ message: 'Course enrolled successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEnrolledCourses = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).populate('enrolledCourses');
    res.json(user.enrolledCourses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { enrollCourse, getEnrolledCourses };
