const { Router } = require("express");
const {
  createCategory,
  deleteCategory,
} = require("../controllers/categories.controler");

const router = Router();

router.post("/category", createCategory);

router.delete("/category/:id", deleteCategory);

module.exports = router;
