const { Router } = require("express");
const {
  createVideo,
  deleteVideo,
} = require("../controllers/videos.controller");

const router = Router();

router.post("/video", createVideo);

router.delete("/video/:id", deleteVideo);

module.exports = router;
