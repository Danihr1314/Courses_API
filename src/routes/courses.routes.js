const { Router } = require("express");
const {
  getAllCourses,
  getWhitCategoryVideo,
  createCourse,
  updateCourse,
} = require("../controllers/courses.controller");

const router = Router();

router.get("/courses", getAllCourses);

router.get("/courses-info-complete", getWhitCategoryVideo);

router.post("/courses", createCourse);

router.put("/courses/:id", updateCourse);

module.exports = router;
