const { Router } = require("express");
const { addCourseToUser } = require("../controllers/userCourses.controller");

const router = Router();

router.post("/user-courses", addCourseToUser);

module.exports = router;
