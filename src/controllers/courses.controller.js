const CoursesServices = require("../services/courses.services");

const getAllCourses = async (req, res) => {
  try {
    const result = await CoursesServices.getAll();
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getWhitCategoryVideo = async (req, res) => {
  try {
    const result = await CoursesServices.getWithCV();
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createCourse = async (req, res) => {
  try {
    const course = req.body;
    const result = await CoursesServices.create(course);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await CoursesServices.update(id, field);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getAllCourses,
  getWhitCategoryVideo,
  createCourse,
  updateCourse,
};
