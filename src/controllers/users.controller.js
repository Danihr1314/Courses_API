const UserServices = require("../services/users.services");

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getById(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getUserCourses = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getCourses(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getUserById,
  getUserCourses,
};
