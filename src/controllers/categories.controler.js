const CategoriesServices = require("../services/categories.services");

const createCategory = async (req, res) => {
  try {
    const category = req.body;
    const result = await CategoriesServices.create(category);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CategoriesServices.delete(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  createCategory,
  deleteCategory,
};
