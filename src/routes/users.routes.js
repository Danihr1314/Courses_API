const { Router } = require("express");
const {
  getUserById,
  getUserCourses,
} = require("../controllers/users.controller");

const router = Router();

router.get("/users/:id", getUserById);

router.get("/users/:id/courses", getUserCourses);

module.exports = router;
