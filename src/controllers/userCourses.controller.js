const ucServices = require("../services/userCourses.services");

const addCourseToUser = async (req, res) => {
  try {
    const course = req.body;
    const result = await ucServices.create(course);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  addCourseToUser,
};
