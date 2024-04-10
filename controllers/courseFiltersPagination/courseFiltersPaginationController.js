const Course = require('../../models/Course');

const filterCourses = async (req, res) => {
  try {
    const { category, level } = req.query;
    const filters = {};
    if (category) filters.category = category;
    if (level) filters.level = level;

    const courses = await Course.find(filters);
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const paginateCourses = async (req, res) => {
  try {
    const perPage = 10;
    const page = req.params.page || 1;
    const courses = await Course.find()
      .skip((perPage * page) - perPage)
      .limit(perPage);

    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { filterCourses, paginateCourses };
